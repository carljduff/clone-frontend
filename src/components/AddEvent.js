import React from "react";
import { useGlobalState } from "../context/GlobalState";
import "../css/dashboard.css";

const privacyOptions = [
  { value: true, label: "Private" },
  { value: false, label: "Public" },
];

const guestOptions = [
  { value: "5", label: "Bobby Smith" },
  { value: "6", label: "Jill Smith" },
  { value: "7", label: "Jane Smith" },
  { value: "8", label: "Gary Smith" },
  { value: "9", label: "Sue Smith" },
  { value: "10", label: "Jennifer Smith" },
  { value: "11", label: "Lucy Smith" },
  { value: "12", label: "Austin Smith" },
  { value: "13", label: "Benny Duff" },
  { value: "14", label: "Hank Duff" },
  { value: "15", label: "Brandon Campbell" },
];

const EventForm = ({handleSubmit, formValue, setFormValue}) => {
  const [state, dispatch] = useGlobalState();


  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
   
      <form id='event-form' className="create-event" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          className="input-event-btn"
          name="title"
          value={formValue.title}
          onChange={handleChange}
        />
        <label>More about your Event:</label>
        <input
          className="input-event-btn"
          name="description"
          value={formValue.description}
          onChange={handleChange}
        />
        <label>Address:</label>
        <input
          className="input-event-btn"
          name="address"
          value={formValue.address}
          onChange={handleChange}
        />
        <label>Enter the Date:</label>
        <input
          className="input-event-btn"
          name="date"
          value={formValue.date}
          onChange={handleChange}
        />
        <label>Enter the start time:</label>
        <input
          className="input-event-btn"
          name="start_time"
          value={formValue.start_time}
          onChange={handleChange}
        />
        <label>Enter the end time:</label>
        <input
          className="input-event-btn"
          name="end_time"
          value={formValue.end_time}
          onChange={handleChange}
        />
        <label>Invite Guests:</label>
        <select multiple name="guests" onChange={handleChange}>
          {guestOptions.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>

        <select name="isPublic" onChange={handleChange}>
          {privacyOptions.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>

        {/* <button type="submit">Create</button> */}
      </form>
  
  );
};

export default EventForm;

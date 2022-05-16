import React from "react";
import { useGlobalState } from "../context/GlobalState";
import "../css/dashboard.css";

const privacyOptions = [
  { value: true, label: "Private" },
  { value: false, label: "Public" },
];

// const guestOptions = [
//   { value: 2, label: "Brandon Campbell" },
//   { value: 3, label: "Hank Campbell" },
//   { value: 4, label: "Benny Duff" },
//   { value: 5, label: "Abbey Fugate" },
// ];

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
          placeholder="YYYY-MM-DD"
          onChange={handleChange}
        />
        <label>Enter the start time:</label>
        <input
          className="input-event-btn"
          name="start_time"
          placeholder="HH-MM"
          value={formValue.start_time}
          onChange={handleChange}
        />
        <label>Enter the end time:</label>
        <input
          className="input-event-btn"
          name="end_time"
          placeholder="HH-MM"
          value={formValue.end_time}
          onChange={handleChange}
        />
        {/* <label>Invite Guests:</label>
        <select multiple name="guests" onChange={handleChange}>
          {guestOptions.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select> */}

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

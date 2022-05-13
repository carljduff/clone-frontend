import React from "react";
import '../css/event.css'

const statusOptions = [
  { value: "1", label: "Ongoing" },
  { value: "2", label: "Cancelled" },
  { value: "3", label: "Past" },
];

const EditEvent = ({event, id, title, desc, address, date, stime, etime, privates, status, handleSubmit, formValue, setFormValue}) => {
  const [modalShowEdit, setModalShowEdit] = React.useState(false);
  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
   
        <form id='edit-form' className="create-event" onSubmit={handleSubmit}>
          <input
            className="input-event-btn"
            name="title"
            placeholder={title}
            value={formValue.title}
            onChange={handleChange}
          />
          <input
            className="input-event-btn"
            name="description"
            placeholder={desc}
            value={formValue.description}
            onChange={handleChange}
          />
          <input
            className="input-event-btn"
            name="address"
            placeholder={address}
            value={formValue.address}
            onChange={handleChange}
          />
          <input
            className="input-event-btn"
            name="date"
            placeholder={date}
            value={formValue.date}
            onChange={handleChange}
          />
          <input
            className="input-event-btn"
            name="start_time"
            placeholder={stime}
            value={formValue.start_time}
            onChange={handleChange}
          />
          <input
            className="input-event-btn"
            name="end_time"
            placeholder={etime}
            value={formValue.end_time}
            onChange={handleChange}
          />
          <input
            className="input-event-btn"
            name="isPublic"
            placeholder="{isPublic}"
            value={formValue.isPublic}
            onChange={handleChange}
          />
          <select name="status" onChange={handleChange}>
            {statusOptions.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>

          {/* <button type="submit" >
            Submit
          </button> */}
        </form>
   
  );
};

export default EditEvent;

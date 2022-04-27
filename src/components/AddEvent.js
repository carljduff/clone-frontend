import React from "react";
import '../css/event.css'

const AddEvent = () => {
  const [event, setEvent] = React.useState({
    title: "",
    description: "",
    address: "",
    date: "",
    start_time: "",
    end_time: "",
    isPublic: null,
    status: "",
    guests: null,
  });


  function handleChange(e) {
      const value = e.target.value;
      setEvent({
          ...event,
          [e.target.name]: value
      });
      console.log(event)
  }
  return (
    <div className="container">
    {/* <form className="event-form">
      <label>
        Title:
        <input className="form-input" type="text" value={event.title} onChange={handleChange} name="title" />
      </label>
      <label>
        Description:
        <input className="form-input" type="text" value={event.description} onChange={handleChange} name="description" />
      </label>
      <label>
        Address:
        <input className="form-input" type="text" value={event.address} onChange={handleChange} name="address" />
      </label>
      <label>
        Date:
        <input className="form-input" type="text" value={event.date} onChange={handleChange} name="date" />
      </label>
      <label>
        Start Time:
        <input className="form-input" type="text" value={event.start_time} onChange={handleChange} name="start_time" />
      </label>
      <label>
        End Time:
        <input className="form-input" type="text" value={event.end_time} onChange={handleChange} name="end_time" />
      </label>
      <label>
        Private?:
        <input className="form-input" type="text" value={event.isPublic} onChange={handleChange} name="isPublic" />
      </label>
      <label>
        Status:
        <input className="form-input" type="text" value={event.status} onChange={handleChange} name="status" />
      </label>
      <label>
        Guests:
        <input className="form-input" type="text" value={event.guests} onChange={handleChange} name="guests" />
      </label>
      <input className="form-input" type="submit" value="Submit" />
    </form> */}
  <div className="form-info">

<h3>Create New</h3>
    <input className="form-input" placeholder="Type Title Here"></input>
  </div>
  
    </div>
  );
};

export default AddEvent;

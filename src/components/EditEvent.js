import React from "react";
import { useState } from "react";
import axios from "axios";

const EventForm = () => {
  
    const[formValue, setFormValue] = useState({
        owner: 2,
        title: '',
        description: '',
        address: '',
        date: '',
        start_time: '',
        end_time: '',
        isPublic: false,
        status: 1,
        // guests: null,
    });

    const handleChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const eventFormData = new FormData();
        eventFormData.append("owner", formValue.owner)
        eventFormData.append("title", formValue.title)
        eventFormData.append("description", formValue.description)
        eventFormData.append("address", formValue.address)
        eventFormData.append("date", formValue.date)
        eventFormData.append("start_time", formValue.start_time)
        eventFormData.append("end_time", formValue.end_time)
        eventFormData.append("isPublic", formValue.isPublic)
        eventFormData.append("status", formValue.status)
        // eventFormData.append("guests", formValue.guests)


        try {
            const response = await axios({
                method: "PUT",
                url: `https://8000-carljduff-clonebackend-qzjqj4zemon.ws-us43.gitpod.io/api/events/${id}`,
                data: eventFormData,
                headers: { "Content-Type": "multipart/form-data" },
            });
        } catch(error) {
            console.log(error)
        }
    }

    return (
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
    <form className='create-event' onSubmit={handleSubmit}>
      
      <input
        className='input-event-btn'
        name="owner"
        placeholder="Who you be?"
        value={formValue.owner}
        onChange={handleChange}
      />
      <input
        className='input-event-btn'
        name="title"
        placeholder='{props.title}'
        value={formValue.title}
        onChange={handleChange}
      />
      <input
        className='input-event-btn'
        name="description"
        placeholder='{props.desc}'
        value={formValue.description}
        onChange={handleChange}
      />
      <input
        className='input-event-btn'
        name="address"
        placeholder='{props.address}'
        value={formValue.address}
        onChange={handleChange}
      />
      <input
        className='input-event-btn'
        name="date"
        placeholder='{props.date}'
        value={formValue.date}
        onChange={handleChange}
      />
      <input
        className='input-event-btn'
        name="start_time"
        placeholder='{props.stime}'
        value={formValue.start_time}
        onChange={handleChange}
      />
      <input
        className='input-event-btn'
        name="end_time"
        placeholder=''
        value={formValue.end_time}
        onChange={handleChange}
      />
      <input
        className='input-event-btn'
        name="isPublic"
        placeholder='{isPublic}'
        value={formValue.isPublic}
        onChange={handleChange}
      />
      <input
        className='input-event-btn'
        name="status"
        placeholder='{stat}'
        value={formValue.status}
        onChange={handleChange}
      />
      
      <button
        type="submit"
      >
        Submit
      </button>
    </form>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



export default EventForm;
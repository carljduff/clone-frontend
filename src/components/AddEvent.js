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
        guests: 6
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
        eventFormData.append("guests", formValue.guests)


        try {
            const response = await axios({
                method: "POST",
                url: "https://8000-carljduff-clonebackend-qzjqj4zemon.ws-us42.gitpod.io/api/events/",
                data: eventFormData,
                headers: { "Content-Type": "multipart/form-data" },
            });
        } catch(error) {
            console.log(error)
        }
    }

    return (
    <form onSubmit={handleSubmit}>
      <p>Login Form</p>
      <input
        name="owner"
        placeholder="Who you be?"
        value={formValue.owner}
        onChange={handleChange}
      />
      <input
        name="title"
        placeholder="Type your Title Here"
        value={formValue.title}
        onChange={handleChange}
      />
      <input
        name="description"
        placeholder="Tell us more"
        value={formValue.description}
        onChange={handleChange}
      />
      <input
        name="address"
        placeholder="Where is it?"
        value={formValue.address}
        onChange={handleChange}
      />
      <input
        name="date"
        placeholder="When is it?"
        value={formValue.date}
        onChange={handleChange}
      />
      <input
        name="start_time"
        placeholder="When does it start?"
        value={formValue.start_time}
        onChange={handleChange}
      />
      <input
        name="end_time"
        placeholder="When does it end?"
        value={formValue.end_time}
        onChange={handleChange}
      />
      <input
        name="isPublic"
        placeholder="Private Event or Public?"
        value={formValue.isPublic}
        onChange={handleChange}
      />
      <input
        name="status"
        placeholder="Event Status"
        value={formValue.status}
        onChange={handleChange}
      />
      <input
        name="guests"
        placeholder="Who's coming?"
        value={formValue.guests}
        onChange={handleChange}
      />
      <button
        type="submit"
      >
        Create
      </button>
    </form>
    )
}

export default EventForm;
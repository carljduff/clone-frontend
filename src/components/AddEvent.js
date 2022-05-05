import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from '../context/GlobalState'
import request from "../services/api.request";
import Select from 'react-select'
import { API_URL } from "../services/auth.constants";
import Dashboard from "./Dashboard";
import '../css/dashboard.css'
const EventForm = () => {
  const [state, dispatch] = useGlobalState();
  let navigate = useNavigate();

    const[formValue, setFormValue] = useState({
        owner: `${state.currentUser.user_id}`,
        title: '',
        description: '',
        address: '',
        date: '',
        start_time: '',
        end_time: '',
        isPublic: false,
        status: '1',
        // guests: null,
    });

    const handleChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        navigate(-1)
        const eventFormData = new FormData();
        eventFormData.append("owner", `${state.currentUser.user_id}`)
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
            let options = {
              method: "POST",
              url: `${API_URL}api/events/`,
              data: eventFormData,
              headers: { "Content-Type": "multipart/form-data" },
            }
            let resp = await request(options)
        } catch(error) {
            console.log(error)
        }
    }
    return (

      
 
       
      <div className="event-list">
      
    <form className='create-event' onSubmit={handleSubmit}>
      
      <input
        className='input-event-btn'
        name="title"
        placeholder="Type Title Here"
        value={formValue.title}
        onChange={handleChange}
      />
      <input
        className='input-event-btn'
        name="description"
        placeholder="Tell us more"
        value={formValue.description}
        onChange={handleChange}
      />
      <input
        className='input-event-btn'
        name="address"
        placeholder="Where is it?"
        value={formValue.address}
        onChange={handleChange}
      />
      <input
        className='input-event-btn'
        name="date"
        placeholder="When is it?"
        value={formValue.date}
        onChange={handleChange}
      />
      <input
        className='input-event-btn'
        name="start_time"
        placeholder="When does it start?"
        value={formValue.start_time}
        onChange={handleChange}
      />
      <input
        className='input-event-btn'
        name="end_time"
        placeholder="When does it end?"
        value={formValue.end_time}
        onChange={handleChange}
      />
      <input
        className='input-event-btn'
        name="isPublic"
        placeholder="Private Event or Public?"
        value={formValue.isPublic}
        onChange={handleChange}
      />
      
    
      
      <button
        type="submit"
      >
        Create
      </button>
    </form>
    </div>

    )
}

export default EventForm;


                
              
    
import React, { useState } from "react";
import { useGlobalState } from "../context/GlobalState";
import "../css/dashboard.css";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs'

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

const EventForm = ({handleSubmit, formValue, setFormValue, dateValue, setDateValue, startTimeValue, setStartTimeValue, endTimeValue, setEndTimeValue}) => {
  const [state, dispatch] = useGlobalState();


  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const formatDate = (date) => {
    const dateObj = new Date(date);
    const formattedDate = `${dateObj.getMonth() + 1 < 10 ? `0${dateObj.getMonth() + 1}` : dateObj.getMonth() + 1}-${dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : dateObj.getDate()}-${dateObj.getFullYear()}`;
    return formattedDate;
  }

  const formatTime = (time) => {
    const timeObj = new Date(time);
    const hours = timeObj.getHours();
    const minutes = timeObj.getMinutes();
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:00`;
    return formattedTime;
  }
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    
  
      <form id='event-form' className="create-event">
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
        <DatePicker value={dateValue} onChange={(dateValue) => setDateValue(() => formatDate(dateValue))}/>
       
        <TimePicker defaultValue={dayjs('2022-04-17T15:30')} label="Basic time picker" value={startTimeValue} onChange={(startTimeValue) => setStartTimeValue(() => formatTime(startTimeValue))} />
      
        
        <TimePicker label="Basic time picker" value={endTimeValue} onChange={(endTimeValue) => setEndTimeValue(() => formatTime(endTimeValue))} />
        
        {/* <label>Invite Guests:</label>
        <select multiple name="guests" onChange={handleChange}>
          {guestOptions.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select> */}

        <select name="isPublic" onChange={handleChange}>
          {privacyOptions.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>

      </form>
      </LocalizationProvider>
  
  );
};

export default EventForm;

import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { getData } from "../data";
import '../css/event.css'
import EventPreview from "./EventPreview";


const EventList = () => {
  const [events, setEvents] = useState([]); 

  useEffect(() => {
      getData()
      .then((data) => {
          setEvents(data)
      })
  },[]);
  
  return(
    <div>
      {events.map(event => <Event key={event.id} event={event}/>)}
    </div>
   
  )
  
};

const Event = ({event}) => {
  return (
    <div>
      
      <EventPreview event={event}/>
    </div>
  )
}
export default EventList;
// let baseURL = `https://8000-carljduff-clonebackend-qzjqj4zemon.ws-us42.gitpod.io/api/`

// const [event, setEvent] = useState([])

//   useEffect(() => {
//     axios.get(`${baseURL}events/`).then((response) => {
//       setEvent(response.data);
//     });
//   }, []);

//   if (!event) return null;
// <div>
// <h1> {event.title} </h1>
// </div>
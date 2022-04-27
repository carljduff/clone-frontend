import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
// import { getData } from "../data";
import '../css/event.css'

let baseURL = `https://8000-carljduff-clonebackend-qzjqj4zemon.ws-us42.gitpod.io/api/`


const EventList = () => {
  // const [events, setEvents] = useState([]); 

  // useEffect(() => {
  //     getData()
  //     .then((data) => {
  //         setEvents(data)
  //     })
  // },[]);
  const [event, setEvent] = useState([])

  useEffect(() => {
    axios.get(`${baseURL}events/`).then((response) => {
      setEvent(response.data);
    });
  }, []);

  if (!event) return null;
  return(
    // <div>
    //   {events.map(event => <Event key={event.id} event={event}/>)}
    // </div>
    <div>
      <h1> {event.title} </h1>
    </div>
  )
  
};

// const Event = ({event}) => {
//   return (
//     <div>
//       {event.title}
//     </div>
//   )
// }
export default EventList;

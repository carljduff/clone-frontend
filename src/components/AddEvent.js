import React from "react";
import { useState, useEffect } from "react";
import { getData } from "../data";
import '../css/event.css'



const AddEvent = () => {
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
      {event.title}
    </div>
  )
}
export default AddEvent;

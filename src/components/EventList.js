import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { getData } from "../data";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../css/event.css'


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
    <div className="event-container">
     

      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={event.img} />
  <Card.Body>
    <Card.Title>{event.title}</Card.Title> 
    <Card.Text>
      {event.date}
      {event.start_time}
      {event.end_time}

    </Card.Text>
    <Button variant="primary">View</Button>
  </Card.Body>
</Card>
      
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
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { getData } from "../data";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../css/event.css'
import { Link } from "react-router-dom";
import LargeModal from '../components/LargeModal'

const EventList = () => {
  const [events, setEvents] = useState([]); 
  
  useEffect(() => {
      getData()
      .then((data) => {
          setEvents(data)
      })
  },[]);
  
  const handleView = () => {
    
  }
  return(
    <div>
      {events.map(event => <Event key={event.id} event={event}/>)}
    </div>
   
  )
  
};

const Event = ({event}) => {
  const [modalShow, setModalShow] = React.useState(false);
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
    <Button onClick={() => setModalShow(true)} variant="primary">View</Button>
  </Card.Body>
</Card>
<LargeModal
  show={modalShow}
  onHide={() => setModalShow(false)}
  id={event.id} 
  title={event.title}
  desc={event.description}
  address={event.address}
  date={event.date}
  stime={event.start_time}
  etime={event.end_time}
  private={event.isPublic}
  status={event.status}

  />
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
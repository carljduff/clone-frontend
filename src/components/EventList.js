import React from "react";
import { useState, useEffect } from "react";
import { getData } from "../data";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../css/event.css'
import LargeModal from './LargeModal'

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
  const [modalShow, setModalShow] = React.useState(false);
 
  return (
    <div className="event-container">
     
    <div className="event-card">

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
    </div>

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

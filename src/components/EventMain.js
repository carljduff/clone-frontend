import Card from 'react-bootstrap/Card'
import '../css/event.css'
import EventChat from "../components/EventChat";
import Button from 'react-bootstrap/Button';
import React from 'react';


const EventMain = () => {

  const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className='event-frame'>
        <Card>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Text>
              <div className='event-start'>
             <div className='event-add'>
             <Button variant="primary" onClick={() => setModalShow(true)}>
          +
        </Button>
             </div>
            <p> Title of Event: {event.title} </p>
            <p> Address: </p>
            <p> Date/Time: </p>
              </div>
            <hr/>
            <div className='choose-items' >
            <p> What would you like to bring? <br/>
            Please select an item.</p>

            <p>DISPLAY LIST OF ITEMS THAT OWNER SETS AND ALLOW TO BE CHOSEN</p>
          
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
        <div className='event-bottom'>

        <h5 className='event-title'>Event Settings</h5>
        

       <a href=''>RSVP Details</a> <br/>
       <a href=''>Item Details</a> <br/>
       <a href=''>View My Profile</a> <br/>
        </div>
        

       
  
        <EventChat
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    )
}

export default EventMain;
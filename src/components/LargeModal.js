import Modal from 'react-bootstrap/Modal'
import React from 'react'
import Button from 'react-bootstrap/Button'
import EventChat from "../components/EventChat";
import Card from 'react-bootstrap/Card'
import '../css/navbar.css'
import '../css/event.css'
import AddEvent from './AddEvent'
import EditEvent from './EditEvent'
import { Link } from 'react-router-dom'

function LargeModal(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShowEdit, setModalShowEdit] = React.useState(false);
    return (
    <div className='modal'>

       
      <Modal className='modal'
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
              <p> Title of Event: {props.title} </p>
              <p> Address: {props.address}  </p>
              <p> Date/Time: {props.date} | {props.stime}</p>
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
          <EditEvent
            show={modalShowEdit}
            onHide={() => setModalShowEdit(false)}
          />
        </div>
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={() => setModalShowEdit(true)}>Edit</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>

    
      </div>
    );
  }


  export default LargeModal;

 
 



  

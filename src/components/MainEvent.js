import Modal from 'react-bootstrap/Modal'
import React from 'react'
import Button from 'react-bootstrap/Button'
import EventChat from "./EventChat";
import Card from 'react-bootstrap/Card'
import { useState } from 'react';
import '../css/navbar.css'
import '../css/event.css'
import EditEvent from './EditEvent'
import axios from "axios";
import Items from './Items';
import request from '../services/api.request';
import AddItem from './AddItem';
import { useGlobalState } from "../context/GlobalState"

function MainEvent(props) {
  const [state, dispatch] = useGlobalState();
  const [modalShow, setModalShow] = useState(false);
  const [modalShowEdit, setModalShowEdit] = useState(false);


  const deleteHandler = async (e) => {
      try {
        let options = {
          url: `https://8000-carljduff-clonebackend-qzjqj4zemon.ws-us43.gitpod.io/api/events/${props.id}`,
          method: 'DELETE',
        }
        let resp = await request(options)
        console.log('Item successfully deleted.')
        props.onHide()
        window.location.reload();

      } catch (error) {
        alert(error)
      }
      
    
  }
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
              <p> What would you like to bring?   <AddItem id={props.id}/> <br/>
              Please select an item.</p>
              </div>
  
              <Items id={props.id}/>
            
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
          id={props.id} 
          title={props.title}
          desc={props.desc}
          address={props.address}
          date={props.date}
          stime={props.stime}
          etime={props.etime}
          private={props.private}
          status={props.status}
           />
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button  onClick={deleteHandler}>Delete</Button>
        <Button onClick={() => setModalShowEdit(true)}>Edit</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>

    
      </div>
    );
  }


  export default MainEvent;

 
 



  

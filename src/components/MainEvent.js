import Modal from 'react-bootstrap/Modal'
import React from 'react'
import Button from 'react-bootstrap/Button'
import EventChat from "./EventChat";
import Card from 'react-bootstrap/Card'
import { useState, useEffect } from 'react';
import '../css/navbar.css'
import '../css/event.css'
import EditEvent from './EditEvent'
import Items from './Items';
import request from '../services/api.request';
import AddItem from './AddItem';
import { useGlobalState } from "../context/GlobalState"
import { API_URL } from '../services/auth.constants';

function MainEvent(props) {
  const [state, dispatch] = useGlobalState();
  // const [items, setItems] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [modalShowEdit, setModalShowEdit] = useState(false);
  
  // useEffect(() => {
  //     setItems(<Items id={props.id}/>);
  // }, [items])

  useEffect(() => {
    setItems(items)
  }, [])

  const deleteHandler = async (e) => {
      try {
        let options = {
          url: `${API_URL}api/events/${props.id}`,
          method: 'DELETE',
        }
        let resp = await request(options)
        console.log('Item successfully deleted.')
        console.log({item})
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
              <h4> Title of Event: {props.title} {props.items}</h4>
              <h4> Address: {props.address}  </h4>
              <h4> Date/Time: {props.date} | {props.stime}</h4>
                </div>
              {/* <hr/> */}
              <div className='choose-items' >
              <h4> What would you like to bring?   <AddItem id={props.id}/> <br/>
              Please select an item.</h4>
              </div>
  
              <Items id={props.id}/>
              
            {/* {items} */}
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

 
 



  

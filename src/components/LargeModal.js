import Modal from 'react-bootstrap/Modal'
import React from 'react'
import Button from 'react-bootstrap/Button'
import '../css/navbar.css'

function LargeModal(props) {
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
            {props.id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{props.title}</h4>
          <p>
            {props.desc}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }

  export default LargeModal;


//   import Button from 'react-bootstrap/Button'
// import LargeModal from "../components/LargeModal";
//   const [modalShow, setModalShow] = React.useState(false);

//   <Button onClick={() => setModalShow(true)}>
//   Log in
//   </Button>

//   <LargeModal
//   show={modalShow}
//   onHide={() => setModalShow(false)}
//   />
  

  

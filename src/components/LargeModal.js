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
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
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
  

  

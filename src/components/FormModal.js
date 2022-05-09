import React from "react"
import { useState, useEffect } from "react"
import { useGlobalState } from "../context/GlobalState"
import request from "../services/api.request"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from "./Form"

function FormModal(props) {
  return (
    <Modal
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
        <Form/>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FormModal;

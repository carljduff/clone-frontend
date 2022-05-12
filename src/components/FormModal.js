import React from "react"
import { useState, useEffect } from "react"
import { useGlobalState } from "../context/GlobalState"
import request from "../services/api.request"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from "./Form"

function FormModal({setOpenModal}) {
  return (
    <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
             X
            </button>
          </div>
          {/* <div className="title">
            <h1>Create</h1>
          </div> */}
          <div className="body">
          <Form/>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button>Continue</button>
          </div>
        </div>
      </div>
  );
}

export default FormModal;

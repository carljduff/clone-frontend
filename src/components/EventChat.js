import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


const EventChat = (props) => {
  const [comment, setComment] = useState([]);
  const [input, setInput] = useState('')

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const inputSubmitHandler = (e) => {
    setComment(input)
    console.log(comment)
    setInput('')
  }

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          {/* <Modal.Title id="contained-modal-title-vcenter">
          Event Chat
        </Modal.Title> */}
          Event Chat
        </Modal.Header>
        <Modal.Body>
          <p>
           {comment}
          </p>
        </Modal.Body>
        {/* <Modal.Footer> */}
          <div className="comment">
            
                <input
                value = {input}
                onChange={handleInput}
                className="comment-input"
                  type="text"
                  name="chat"
                  placeholder="Add your comment..."
                />
            <button onClick={inputSubmitHandler} className="comment-btn">Add </button>
          </div>
        {/* </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default EventChat;

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


const EventChat = (props) => {
    const [comment, setComment] = useState({
        value: "",
        show: ""
    });


    const handleChange = (e) => {
        setComment({value: e.target.value})
    }

    const submit = (e) => {
        e.preventDefault();
        setComment({show: comment.value});
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
           {comment.show}
          </p>
        </Modal.Body>
        {/* <Modal.Footer> */}
          <div className="comment">
            <form onSubmit={submit}>
              <label>
                <input
                value={comment.value}
                onChange={(e) => handleChange(e)}
                className="comment-input"
                  type="text"
                  name="chat"
                  placeholder="Add your comment..."
                />
              </label>
            <input className="comment-btn" type="submit" value="Submit"/>
            </form>
          </div>
        {/* </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default EventChat;

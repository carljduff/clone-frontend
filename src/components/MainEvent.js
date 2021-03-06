import React from "react";
import Button from "react-bootstrap/Button";
import EventChat from "./EventChat";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../css/navbar.css";
import "../css/event.css";
import Items from "./Items";
import request from "../services/api.request";
import { useGlobalState } from "../context/GlobalState";
import { API_URL } from "../services/auth.constants";
import EditModal from "./EditModal";

function MainEvent() {
  let { eventId } = useParams();
  let navigate = useNavigate();

  const [state, dispatch] = useGlobalState();
  let event = state.events.find((event) => event.id == eventId);
  const { id, title, description, address, date, start_time, end_time, isPublic, status } =
    event || {};


  useEffect(() => {
    if (!id) navigate("/dash");
  }, []);

  const [modalShow, setModalShow] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const modalHandler = () => {
    setModalShow(false);
    setModalOpen(true);
  };
  const deleteHandler = async (e) => {
    try {
      let options = {
        url: `${API_URL}api/events/${id}`,
        method: "DELETE",
      };
      let resp = await request(options);
      console.log("Item successfully deleted.");
      navigate("/dash")
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <div className="event-frame">
        <div className="event-start">
          <h3> {title} </h3>
          <p> {address} </p>
          <p> {date} </p>
        </div>

        <div className="choose-items">
          <h4>
            What would you like to bring?
            <br />
            Please select an item.
          </h4>

          <Items id={id} />
        </div>

        <div className="event-bottom">
          <h5 className="event-title">Event Settings</h5>
          <a href="">RSVP Details</a> <br />
          <a href="">Item Details</a> <br />
          <a href="">View My Profile</a> <br />
        </div>

        <EventChat show={modalShow} onHide={() => setModalShow(false)} />

        <div className="main-btns">
        <Button className="m-btn" onClick={() => { navigate('/dash')}}>
            Back
          </Button>
          <Button className="m-btn" onClick={deleteHandler}>
            Delete
          </Button>
          <Button className="m-btn" onClick={modalHandler}>
            Edit
          </Button>
        </div>
      </div>
      {modalOpen && (
        <EditModal
          id={id}
          title={title}
          desc={description}
          address={address}
          date={date}
          stime={start_time}
          etime={end_time}
          isPublic={isPublic}
          status={status}
          setOpenModal={setModalOpen}
        />
      )}
    </>
  );
}

export default MainEvent;

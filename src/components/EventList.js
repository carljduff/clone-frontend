import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@mui/material/Icon";
import { getData } from "../data";
import "../css/event.css";
import MainEvent from "./MainEvent";
import EventCard from "./EventCard";
import request from "../services/api.request";
import { useGlobalState } from "../context/GlobalState";
import Items from "./Items";
import { API_URL } from "../services/auth.constants";
import Dashboard from "./Dashboard";
const EventList = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    async function getEvents() {
      let options = {
        url: `${API_URL}api/events/`,
        method: "GET",
      };
      let resp = await request(options);
      setEvents(resp.data);
    }
    getEvents();
  }, []);

  return (
    <>
    <h1 className="main-title">Organizing</h1>
    <div className="event-list">
      {events.map((event) => (
        <Event key={event.id} event={event} />
        ))}
    </div>
        </>
  );
};

const Event = ({ event }) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    
      <EventCard event={event} setModalShow={setModalShow} />

      <MainEvent
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={event.id}
        title={event.title}
        desc={event.description}
        address={event.address}
        date={event.date}
        stime={event.start_time}
        etime={event.end_time}
        private={event.isPublic}
        status={event.status}
      />

      <div>
        <button className="add-btn">
          <Link to="/test">
            <Icon sx={{ fontSize: 100 }} color="primary">
              add_circle
            </Icon>
          </Link>
        </button>
      </div>
    </>
  );
};
export default EventList;

import React from "react";
import { useState, useEffect } from "react";
import { getData } from "../data";
import "../css/event.css";
import MainEvent from "./MainEvent";
import EventCard from "./EventCard";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const ENDPOINT = 'events'
  useEffect(() => {
    getData({ENDPOINT}).then((data) => {
      setEvents(data);
    });
  }, []);

  return (
    <>
      <div className="main-container">
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
    <div>
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
    </div>
  );
};
export default EventList;

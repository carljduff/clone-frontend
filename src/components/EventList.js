import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import Icon from "@mui/material/Icon";
import "../css/event.css";
import EventCard from "./EventCard";
import request from "../services/api.request";
import { useGlobalState } from "../context/GlobalState";
import { API_URL } from "../services/auth.constants";
import FormModal from "./FormModal";
import EditModal from "./EditModal";

const EventList = () => {
  const [state, dispatch] = useGlobalState();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
      async function getEvents() {
        let options = {
          url: `${API_URL}api/events/?ordering=id`,
          method: "GET",
        };
        let resp = await request(options);
        dispatch({ events: resp.data });
        }
      getEvents()
    }, []);
    

  return (
    <>
      <div className="event-list">
        {state.events.map((event) => (
          <Event key={event.id} event={event} />
        ))}
        <div>
          <button
            className="openModalBtn"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            <Icon className="add-icon" sx={{ fontSize: 100 }}>
              add_circle
            </Icon>
          </button>
        </div>
      </div>

      {modalOpen && <FormModal setOpenModal={setModalOpen} />}
    </>
  );
};

const Event = ({ event  }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(false);


  return (
    <>
      <EventCard
        page={page}
        setPage={setPage}
        event={event}
        setModalShow={setModalShow}
      />

      {modalOpen && <EditModal event={event} />}
    </>
  );
};

export default EventList;

import React, { useState } from "react";
import "../css/progress.css";
import EditEvent from "./EditEvent";
import EditForm from "./EditForm";
import Form from "./Form";
import { useGlobalState } from "../context/GlobalState";
import { API_URL } from "../services/auth.constants";
import request from "../services/api.request";

const ProgressStep = () => {
    const [currentActive, setCurrentActive] = useState(0);
    const circles = [1, 2, 3, 4];
    const [state, dispatch] = useGlobalState();
    const [formValue, setFormValue] = useState({
        owner: `${state.currentUser.user_id}`,
        // owner: `${state.currentUser.user_id}`,
        title: "",
        description: "",
        address: "",
        date: "",
        start_time: "",
        end_time: "",
        isPublic: "",
        status: "1",
        img: "",
        // guests: [],
      });
      const [newId, setNewId] = useState();
      

    const handleSubmit = async () => {
        // e.preventDefault();
        // navigate(-1)
        const eventFormData = new FormData();
        eventFormData.append("owner", `${state.currentUser.user_id}`);
        eventFormData.append("title", formValue.title);
        eventFormData.append("description", formValue.description);
        eventFormData.append("address", formValue.address);
        eventFormData.append("date", formValue.date);
        eventFormData.append("start_time", formValue.start_time);
        eventFormData.append("end_time", formValue.end_time);
        eventFormData.append("isPublic", formValue.isPublic);
        eventFormData.append("status", formValue.status);
        eventFormData.append("img", formValue.img);
        // eventFormData.append("guests", formValue.guests);
    
        try {
          let options = {
            method: "POST",
            url: `${API_URL}api/events/`,
            data: eventFormData,
            headers: { "Content-Type": "multipart/form-data" },
          };
          let resp = await request(options); 
          dispatch({ events: [...state.events, resp.data] });
          setNewId(resp.data.id)
        } catch (error) {
          console.log(error);
          
        }
      };

    const changeClasses = () => {
        const updatedCircles = circles.map((circle, index) => {
            if (index === currentActive) {
                return <div className="circle active" key={index}>{circle}</div>;
            } else {
                return <div className="circle" key={index}>{circle}</div>;
            }
        });

        return updatedCircles;
    };

    const nextButtonHandler = () => {
        setCurrentActive(prevActive => (prevActive + 1) % circles.length);
        handleSubmit();
    };

    const prevButtonHandler = () => {
        setCurrentActive(prevActive => (prevActive - 1 + circles.length) % circles.length);
    };

    return (
        <div className="p-container">
            <div className="progress-container">
                <div className="progress" id="progress"></div>
                {changeClasses()}
            </div>

            <Form handleSubmit={handleSubmit} newId={newId} formValue={formValue} setFormValue={setFormValue} currentActive={currentActive}/>

            <button
                onClick={prevButtonHandler}
                className="btn"
                id="prev"
                disabled={currentActive === 0}
            >
                Prev
            </button>
            <button
                onClick={nextButtonHandler}
                className="btn"
                id="next"
                disabled={currentActive === circles.length - 1}
            >
                Next
            </button>

           
        </div>
    );
};

export default ProgressStep;


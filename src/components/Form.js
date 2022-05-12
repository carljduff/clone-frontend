import React, {useState} from 'react'
import AddEvent from '../components/AddEvent'
import AddItem from './AddItem';
import { useGlobalState } from "../context/GlobalState";
import { API_URL } from "../services/auth.constants";
import request from "../services/api.request";
import '../css/modal.css'

const Form = ({setOpenModal}) => {
    const [state, dispatch] = useGlobalState();
    const [currentPage, setPage] = useState(1);
    const [newId, setNewId] = useState();
    const nextPage = () => setPage((prev) => ++prev);
    const prevPage = () => setPage((prev) => --prev);

    const [formValue, setFormValue] = useState({
        owner: `${state.currentUser.user_id}`,
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

    const handleSubmit = async (e) => {
        e.preventDefault();
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
          let resp = request(options); //need await here...i think
          resp.then( (resp) => setNewId(resp.data.id))
          nextPage()
        } catch (error) {
          console.log(error);
          
        }
      };

    return(
        <div>
         
            {currentPage === 1 && (
                <AddEvent handleSubmit={handleSubmit} formValue={formValue} setFormValue={setFormValue}/>
            )}
            {currentPage === 2 && (
                <AddItem setOpenModal={setOpenModal} eventId={newId} />
                
            )}

            <div className='footer'>
            {currentPage === 2 && (
            
                <button onClick={prevPage}>Back</button>
            )}
            {currentPage === 1 && (
              <button form='event-form' type='submit' className='next-btn' onClick={handleSubmit}>Next</button>
             
            )}
            {currentPage === 1 && (
              <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            )}
            {currentPage === 2 && (
              <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            )}
            </div>

        </div>
    )
}

export default Form;
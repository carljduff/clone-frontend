import React, {useEffect, useState} from 'react'
import AddItem from './AddItem';
import EditEvent from './EditEvent';
import { useGlobalState } from "../context/GlobalState";
import { API_URL } from "../services/auth.constants";
import request from "../services/api.request";
import '../css/modal.css'
const EditForm = ({event, id, title, desc, address, date, stime, etime, isPublic, status, setOpenModal}) => {
    const [state, dispatch] = useGlobalState();
    const [currentPage, setPage] = useState(1);
    const [newId, setNewId] = useState();
    const nextPage = () => setPage((prev) => ++prev);
    const prevPage = () => setPage((prev) => --prev);

    const [formValue, setFormValue] = useState({
        owner: 2,
        title: `${title}`,
        description: `${desc}`,
        address: `${address}`,
        date: `${date}`,
        start_time: `${stime}`,
        end_time: `${etime}`,
        isPublic: `${isPublic}`,
        status: `${status}`,
        // guests: null,
      });

      useEffect(() => {
          setNewId(id)

      }, [])

      
      const doneHandler = () => {
        setOpenModal(false);
        window.location.reload()
      }
      const handleSubmit = async (e) => {
        e.preventDefault();
        const eventFormData = new FormData();
        eventFormData.append("owner", formValue.owner);
        eventFormData.append("title", formValue.title);
        eventFormData.append("description", formValue.description);
        eventFormData.append("address", formValue.address);
        eventFormData.append("date", formValue.date);
        eventFormData.append("start_time", formValue.start_time);
        eventFormData.append("end_time", formValue.end_time);
        eventFormData.append("isPublic", formValue.isPublic);
        eventFormData.append("status", formValue.status);
        // eventFormData.append("guests", formValue.guests)
        nextPage()
        try {
          let options = {
            method: "PUT",
            url: `${API_URL}api/events/${id}/`,
            data: formValue,
            headers: { "Content-Type": "multipart/form-data" },
        
          };
          let resp = await request(options);
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <div>
         
            {currentPage === 1 && (
                <EditEvent id={id} title={title} desc={desc} address={address} date={date} stime={stime} etime={etime} isPublic={isPublic} status={status} event={event} handleSubmit={handleSubmit} formValue={formValue} setFormValue={setFormValue}/>
            )}
            {currentPage === 2 && (
                <AddItem eventId={newId} />
                
            )}

            <div className='footer'>
            {currentPage === 2 && (

                <button className='back-btn' onClick={prevPage}>Back</button>
            )}

            {currentPage === 2 && (
              <button
              onClick={doneHandler}
              id="cancelBtn"
            >
              Done
            </button>
            )}
            {currentPage === 1 && (
              <button form='edit-form' type='submit' className='next-btn' onClick={handleSubmit}>Next</button>
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
            </div>

        </div>
    )
}

export default EditForm;
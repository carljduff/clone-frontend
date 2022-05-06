import React from "react"
import { useState, useEffect } from "react"
import { useGlobalState } from "../context/GlobalState"
import request from "../services/api.request"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { API_URL } from "../services/auth.constants"
import MainEvent from "./MainEvent"

const categoryOptions = [
  {value: 1, label: 'Food'},
  {value: 2, label: 'Appetizers'},
  {value: 3, label: 'Entrees'},
  {value: 4, label: 'Drinks'},
  {value: 5, label: 'Alcohol'},
  {value: 6, label: 'Essentials'},
]
const AddItem = ({id}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [state, dispatch] = useGlobalState();


    const[formValue, setFormValue] = useState({
          label: '',
          category: '',
          event: `${id}`,
          user: `${state.currentUser.user_id}`,
        })
      

      const itemHandleChange = (e) => {
        setFormValue({
          ...formValue,
          [e.target.name]: e.target.value
        });
      }
    
      const itemHandleSubmit = async(e) => {
        e.preventDefault()
        const eventFormData = new FormData();
        eventFormData.append("label", formValue.label)
        eventFormData.append("category", formValue.category)
        eventFormData.append("event", `${id}`)
        eventFormData.append("user", `${state.currentUser.user_id}`)

        try {
            let options = {
              method: "POST",
              url: `${API_URL}api/items/`,
              data: eventFormData,
              headers: { "Content-Type": "multipart/form-data" },
            }
            let resp = await request(options)
            console.log(`${id}`)
        } catch(error) {
            console.log(error)
        }
    }

  return (
    <>
    {/* <MainEvent formValue={formValue} /> */}
      <Button variant="primary" onClick={handleShow}>
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
    
        </Modal.Header>
        <Modal.Body> <div className="add-container">

      
<form className='create-item' onSubmit={itemHandleSubmit}>
  <label>
    What would you like to add?
    </label>
  <input
    className='input-item-btn'
    name="label"
    value={formValue.label}
    onChange={itemHandleChange}
  />
  <label>
    Choose a Category:
  </label>

  <select name='category' onChange={itemHandleChange}>
    {categoryOptions.map((option) => (
      <option value={option.value}>{option.label}</option>
    ))}
  </select>
 
  
  <button
    type="submit"
    onClick={handleClose}
  >
    Create
  </button>
</form>
</div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddItem;
import React from "react";
import { useState, useEffect } from "react";
import { useGlobalState } from "../context/GlobalState";
import request from "../services/api.request";
import { API_URL } from "../services/auth.constants";
import '../css/modal.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';

const categoryOptions = [
  { value: 1, label: "Appetizers" },
  { value: 2, label: "Entrees" },
  { value: 3, label: "Drinks" },
  { value: 4, label: "Alcohol" },
  { value: 5, label: "Essentials" },
];


const AddItem = ({ eventId, setOpenModal }) => {
  const [label, setLabel] = useState('')
  const [lists, setLists] = useState([]) //list s
  const [state, dispatch] = useGlobalState();

  const [formValue, setFormValue] = useState({
    label: "",
    category: "",
    event: `${eventId}`,
    user: `${state.currentUser.user_id}`,
  });

  

  const itemHandleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
    setLabel(formValue.label)
  };

  const itemHandleSubmit = async (e) => {
    e.preventDefault();
    const eventFormData = new FormData();
    eventFormData.append("label", formValue.label);
    eventFormData.append("category", formValue.category);
    eventFormData.append("event", `${eventId}`);
    eventFormData.append("user", `${state.currentUser.user_id}`);

    try {
      let options = {
        method: "POST",
        url: `${API_URL}api/items/`,
        data: eventFormData,
        headers: { "Content-Type": "multipart/form-data" },
        
      };
      let resp = await request(options);

      setLists(lists => [...lists, label])

    } catch (error) {
      console.log(error);
    }
  };

  const List = ({label}) => <h3>{label}</h3>

  return (
    <>
   
          <div className="add-container">
            <form className="create-item" onSubmit={itemHandleSubmit}>
              <label>What would you like to add?</label>
              <button className="btn-item" type="submit">
                WORK
              </button>
              <input
                className="input-item-btn"
                name="label"
                value={formValue.label}
                onChange={itemHandleChange}
              />
              <label>Choose a Category:</label>

              <select name="category" onChange={itemHandleChange}>
                {categoryOptions.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
                 

            
                  
            </form>
                  <div>
            {lists.map((label, i) => (
              <List label={label} key={label + i} />
            ))}
                  </div>
          </div>
    
    </>
  );
};

export default AddItem;

import React from "react"
import { useState } from "react"
import { useGlobalState } from "../context/GlobalState"
import request from "../services/api.request"

const AddItem = (props) => {
    const [state, dispatch] = useGlobalState();
    const[formValue, setFormValue] = useState({
          label: '',
          category: '',
          event: `${props.id}`,
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
        eventFormData.append("event", `${props.id}`)
        eventFormData.append("user", `${state.currentUser.user_id}`)

        try {
            let options = {
              method: "POST",
              url: `https://8000-carljduff-clonebackend-qzjqj4zemon.ws-us43.gitpod.io/api/items/?event__id=${props.id}`,
              data: eventFormData,
              headers: { "Content-Type": "multipart/form-data" },
            }
            let resp = await request(options)
            console.log(`${props.id}`)
        } catch(error) {
            console.log(error)
        }
    }

    return(
        <div className="add-container">

      
    <form className='create-event' onSubmit={itemHandleSubmit}>
      <input
        className='input-event-btn'
        name="label"
        placeholder="What do you need to add?"
        value={formValue.label}
        onChange={itemHandleChange}
      />
      <input
        className='input-event-btn'
        name="category"
        placeholder="Type category Here"
        value={formValue.category}
        onChange={itemHandleChange}
      />
     
      
      <button
        type="submit"
      >
        Create
      </button>
    </form>
    </div>
    )
}

export default AddItem;
import React from "react"
import { useState } from "react"
import { useGlobalState } from "../context/GlobalState"
import request from "../services/api.request"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { API_URL } from "../services/auth.constants"

// const AddItem = ({id}) => {
//     const [state, dispatch] = useGlobalState();
//     const[formValue, setFormValue] = useState({
//           label: '',
//           category: '',
//           event: `${id}`,
//           user: `${state.currentUser.user_id}`,
//         })
      
    
//       const itemHandleChange = (e) => {
//         setFormValue({
//           ...formValue,
//           [e.target.name]: e.target.value
//         });
//         console.log(`${id}`)
//       }
    
//       const itemHandleSubmit = async(e) => {
//         e.preventDefault()
//         const eventFormData = new FormData();
//         eventFormData.append("label", formValue.label)
//         eventFormData.append("category", formValue.category)
//         eventFormData.append("event", `${id}`)
//         eventFormData.append("user", `${state.currentUser.user_id}`)

//         try {
//             let options = {
//               method: "POST",
//               url: `https://8000-carljduff-clonebackend-qzjqj4zemon.ws-us43.gitpod.io/api/items/`,
//               data: eventFormData,
//               headers: { "Content-Type": "multipart/form-data" },
//             }
//             let resp = await request(options)
//             console.log(`${id}`)
//         } catch(error) {
//             console.log(error)
//         }
//     }

//     return(
//         <div className="add-container">

      
//     <form className='create-event' onSubmit={itemHandleSubmit}>
//       <input
//         className='input-event-btn'
//         name="label"
//         placeholder="What do you need to add?"
//         value={formValue.label}
//         onChange={itemHandleChange}
//       />
//       <input
//         className='input-event-btn'
//         name="category"
//         placeholder="Type category Here"
//         value={formValue.category}
//         onChange={itemHandleChange}
//       />
     
      
//       <button
//         type="submit"
//       >
//         Create
//       </button>
//     </form>
//     </div>
//     )
// }

// export default AddItem;

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
      <Button variant="primary" onClick={handleShow}>
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
    
        </Modal.Header>
        <Modal.Body> <div className="add-container">

      
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
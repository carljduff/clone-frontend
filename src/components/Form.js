import React, {useState} from 'react'
import AddEvent from '../components/AddEvent'
import AddItem from './AddItem';
import '../css/modal.css'

const Form = ({setOpenModal, currentActive, handleSubmit, formValue, setFormValue, newId}) => {
  

    return(
        <div>
            {currentActive === 0 && (
                <AddEvent handleSubmit={handleSubmit} formValue={formValue} setFormValue={setFormValue}/>
            )}
            {currentActive === 1 && (
                <AddItem setOpenModal={setOpenModal} eventId={newId} />
            )}
        </div>
    )
}

export default Form;
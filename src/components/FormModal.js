import React from "react"
import Form from "./Form"

function FormModal({setOpenModal}) {


  return (
    <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
             X
            </button>
          </div>
          <div className="body">
          <Form setOpenModal={setOpenModal} />
          </div>
          
        </div>
      </div>
  );
}

export default FormModal;

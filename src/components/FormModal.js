import React from "react"
import Form from "./Form"
import ProgressStep from "./ProgressStep";

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
          <ProgressStep />
          </div>
          
        </div>
      </div>
  );
}

export default FormModal;

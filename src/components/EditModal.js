import EditForm from "./EditForm"
import '../css/modal.css'


const EditModal = ({event, setOpenModal, id, title, desc, address, date, stime, etime, privates, status}) => {
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
          <EditForm id={id} title={title} desc={desc} address={address} date={date} stime={stime} etime={etime} privates={privates} status={status} event={event}/>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button>Continue</button>
          </div>
        </div>
      </div>
  );
}

export default EditModal
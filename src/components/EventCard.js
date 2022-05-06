import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../css/event.css";
import '../css/dashboard.css'
import { useGlobalState } from '../context/GlobalState'

const EventCard = ({ event, setModalShow }) => {
  const [state, dispatch] = useGlobalState();
  // if(event.owner == state.currentUser.user_id) {
    return (
      <div className="preview-container">
        <Card className="preview-card" onClick={() => setModalShow(true)}>
          <Card.Img variant="top" src={event.img} />
          <Card.Body>
            <div className="card-title">
            <Card.Title><h2>{event.title}</h2></Card.Title>
            <hr/>
            </div>
            <Card.Text>
            <div className="card-info">
              <h5>{event.date}</h5>
              <h5>{event.start_time}</h5>
              
            </div>
            </Card.Text>
            {/* <Button onClick={() => setModalShow(true)} variant="primary">
              View
            </Button> */}
          </Card.Body>
        </Card>
      </div>
    );
  // }
};

export default EventCard;

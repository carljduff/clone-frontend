import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../css/event.css";
import { useGlobalState } from '../context/GlobalState'

const EventCard = ({ event, setModalShow }) => {
  const [state, dispatch] = useGlobalState();
  // if(event.owner == state.currentUser.user_id) {
    return (
      <div className="preview-container">
        <Card className="preview-card">
          <Card.Img variant="top" src={event.img} />
          <Card.Body>
            <Card.Title>{event.title}</Card.Title>
            <Card.Text>
              {event.date}
              {event.start_time}
              {event.end_time}
              {event.id}
            </Card.Text>
            <Button onClick={() => setModalShow(true)} variant="primary">
              View
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  // }
};

export default EventCard;

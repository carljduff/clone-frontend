import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../css/event.css";

const EventCard = ({ event, setModalShow }) => {
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
          </Card.Text>
          <Button onClick={() => setModalShow(true)} variant="primary">
            View
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EventCard;

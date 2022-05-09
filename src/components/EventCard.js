import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../css/event.css";
import "../css/dashboard.css";
import { useGlobalState } from "../context/GlobalState";

const EventCard = ({ event, setModalShow, formValue }) => {
  const [state, dispatch] = useGlobalState();

  return (
    <div className="preview-container">
      <Card className="preview-card" onClick={() => setModalShow(true)}>
        <Card.Img variant="top" src=''/>
        <Card.Body>
          <div className="card-title">
            <Card.Title>
              <h2>{event.title}</h2>
              <h1>{event.id}</h1>
            </Card.Title>
            <hr />
          </div>
          <Card.Text>
            <div className="card-info">
              <h5>{event.date}</h5>
              <h5>
                {event.start_time} {formValue}
              </h5>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
  // }
};

export default EventCard;

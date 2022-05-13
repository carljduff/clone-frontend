import Card from "react-bootstrap/Card";

import "../css/event.css";
import "../css/dashboard.css";

import { Link } from "react-router-dom";
const EventCard = ({ event }) => {


  

  

  return (
    <div className="preview-container">
      <button className="card-btn">
      <Link to={`/main/${event.id}`}>
      <Card className="preview-card">
        <Card.Img variant="top" src=''/>
        <Card.Body>
          <div className="card-title">
            <Card.Title>
              <h2>{event.title}</h2>
            </Card.Title>
            <hr />
          </div>
          <Card.Text>
            <div className="card-info">
              <h5>{event.date}</h5>
              <h5>
                {event.start_time}
              </h5>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      </Link>
      </button>
    </div>
  );
  // }
};

export default EventCard;

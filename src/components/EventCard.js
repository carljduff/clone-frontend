import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../css/event.css";
import "../css/dashboard.css";
import { useGlobalState } from "../context/GlobalState";
import { Link } from "react-router-dom";
const EventCard = ({ event, formValue, page, setPage, remaining }) => {
  const [state, dispatch] = useGlobalState();

  // const linkto = () => {
  //   <Link to='/main'></Link>
  // }
  const next = () => setPage((prev) => ++prev)

  const please = () => {
    
  }

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
      </Link>
      </button>
    </div>
  );
  // }
};

export default EventCard;

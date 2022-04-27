import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../css/event.css'

const EventPreview = ({event}) => {
    return (
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{event.title}</Card.Title> 
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    )
}

export default EventPreview;

// {eventTitle} on line 8
// {eventDate}
// {eventTime}
// {eventImg}

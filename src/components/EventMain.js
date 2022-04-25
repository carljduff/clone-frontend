import Card from 'react-bootstrap/Card'
import '../css/event.css'

const EventMain = () => {
    return (
        <div>
        <Card>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Text>
              <div className='event-start'>
            <p> Title of Event:</p>
            <p> Address: </p>
            <p> Date/Time: </p>
              </div>
            <hr/>
            <div className='choose-items' >
            <p> What would you like to bring? <br/>
            Please select an item.</p>

            <p>DISPLAY LIST OF ITEMS THAT OWNER SETS AND ALLOW TO BE CHOSEN</p>
          
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
        
        <h5 className='event-title'>Event Settings</h5>
        <div>

       <a href=''>RSVP Details</a> <br/>
       <a href=''>Item Details</a> <br/>
       <a href=''>View My Profile</a> <br/>
        </div>

     
      </div>
    )
}

export default EventMain;
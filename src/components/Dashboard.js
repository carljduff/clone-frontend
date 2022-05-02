import Home from '../pages/Home'
import { Link } from 'react-router-dom';
import EventList from './EventList'
import '../css/dashboard.css'
const Dashboard = () => {
    return (
       
        <div>
            
            <div className='dash-nav'>
                <p className='greeting'>Hi, *first name*</p>

            </div>
            <EventList />
        </div>
        

        
    )
}

export default Dashboard;
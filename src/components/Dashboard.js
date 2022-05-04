import Home from '../pages/Home'
import { Link } from 'react-router-dom';
import EventList from './EventList'
import { useGlobalState } from '../context/GlobalState'
import '../css/dashboard.css'
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';
import Icon from '@mui/material/Icon';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Dashboard = () => {
    const [ state, dispatch ] = useGlobalState();
    let navigate = useNavigate();

    const signout = () => {
        localStorage.removeItem("user");
        navigate("/", { replace: true });
        window.location.reload()
        // localStorage.removeItem("events")
    }
   
  

    

    return (
       
        <div className='dash-container'>
            
            <div className='dash-nav'>
                <p className='greeting'>Hi, *first name*</p>
                <Link to='/'>Home</Link>
                <a href="">Planning</a>

                {
                   state.currentUser && (
                    <Link to='/profile'>Profile</Link>
                   )
               }
                <a href="">Connections</a>
                <Link to='/'><button onClick={signout}>Sign Out</button></Link>
                

            </div>

            <div className='event-list'>

            <EventList />
            </div>

            <div>

  
            <button className='add-btn'><Icon sx={{ fontSize: 100 }} color="primary">add_circle</Icon></button>
            </div>
        </div>
        

        
    )
}

export default Dashboard;
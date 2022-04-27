import './App.css';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import { Link } from 'react-router-dom';
import React from 'react';
import girls from './images/girls.png'
import EventForm from './components/AddEvent';
import './css/navbar.css'
function App() {


  

  return (
    <>
   
   <div className="nav-main">
           

           <a href="">Pricing</a>
           <a href="">About</a>
           <a href="">Blog</a>
           <Link to='/login'>Login</Link>
           <Link to='/addevent'>Events</Link>

           <div className='nav-btn'>
           <button href="../pages/Login" className='btn'>Log in</button>
           <button className='btn'>Sign Up</button>
           
           </div>
   </div>

    <div className="home-container">
    <div className="home-left">
        <div className="home-left-wrapper">
    <h1 className="title">Plan a Little</h1>
    <h1 className="title-1">Togetherness.</h1>
    <h3 className="subtitle">Who's bringing what, without the</h3> 
    <h3 className="subtitle">spreadsheets & hassle!</h3>
        </div>
    </div>

    <div className="home-right">
        <img src={girls}/>
    </div>


</div>

<EventForm/>
</>
  );
}

export default App;

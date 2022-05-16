
import React, { useContext } from "react";
import girls from '../images/girls.png'
import NavBar from "../components/NavBar";
import '../css/navbar.css'
import { EventContext } from "../components/EventList";
const Home = () => {
    // const event = useContext(EventContext)
    // console.log(event)
    return (
     <>
   
   <NavBar/>
    <div className="home-container">
    <div className="home-left">
        <div className="home-left-wrapper">
    <h1 className="title">Plan a Little </h1>
    <h1 className="title-1">Togetherness.</h1>
    <h3 className="subtitle">Who's bringing what, without the</h3> 
    <h3 className="subtitle">spreadsheets & hassle!</h3>
        </div>
    </div>

    <div className="home-right">
        <img className='girls' src={girls}/>
    </div>


</div>


</>
    )
}

export default Home;





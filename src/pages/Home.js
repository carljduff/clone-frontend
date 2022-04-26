import NavBar from "../components/NavBar";
import EventPreview from "../components/EventPreview";
import EventMain from "../components/EventMain";
import AddEvent from "../components/AddEvent";
import React from "react";


import '../css/navbar.css'

const Home = () => {

    return (
        <div>
        <NavBar/>
        <EventPreview />
        <EventMain />
        <AddEvent/>

        
        </div>
    )
}

export default Home;





import NavBar from "../components/NavBar";
import EventPreview from "../components/EventPreview";
import EventMain from "../components/EventMain";
import React from "react";
import '../css/navbar.css'

const Home = () => {
    return (
        <div>
        <NavBar/>
        <EventPreview />
        <EventMain />
        </div>
    )
}

export default Home;





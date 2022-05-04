import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import './css/navbar.css'
import { useState } from 'react';
import Test from './components/Test';
import {Outlet} from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState'
import Login from './pages/Loginnn';
import EventList from './components/EventList'
import Dashboard from './components/Dashboard'
import RightModal from './components/RightModal';

function App() {
  // if (localStorage.getItem("user") === null) {
    return(
      <GlobalProvider>
        <Test/>
        <Outlet/>
      </GlobalProvider>
    )
  // } else if(localStorage.getItem("user") != null) {

  //   return (
  //     <Home/>
  //   );
  // }

    
}

export default App;

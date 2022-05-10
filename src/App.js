import './App.css';
import Home from './pages/Home';
import AddEvent from './components/AddEvent'
import {Outlet} from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState'
import React, { useState, useEffect } from 'react'
import Form from './components/Form';

function App() {

  

  
    return(
      <GlobalProvider>
        <Form/>
        <Outlet/>
      </GlobalProvider>
    )
}

export default App;

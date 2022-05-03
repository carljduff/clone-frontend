import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './pages/Loginnn';
import Register from './components/user/Register'
import Profile from './components/user/Profile';
import AddEvent from './components/AddEvent';
import EditEvent from './components/EditEvent';
import About from './pages/About';
import AddItem from './components/AddItem';
import Dashboard from './components/Dashboard';
import { GlobalProvider } from './context/GlobalState';
//FOR AUTH LOGIN------------------------------------------------
// import Login from './components/user/Login';
// import Register from './components/user/Register';
// import Profile from './components/user/Profile';
//--------------------------------------------------------------
import EventList from './components/EventList'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalProvider>

  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />} />
  <Route path="login" element={<Login />} />
  <Route path='register' element={<Register />} />
  

  {/* FOR AUTH LOGIN------------------------------------ */}
  {/* <Route path="login" element={<Login />} />
  <Route path="register" element={<Register />} />
  {/* FOR AUTH LOGIN------------------------------------ */}
  <Route path='eventlist' element={<EventList />}  />
  <Route path='profile' element={<Profile />} /> 
  <Route path='addevent' element={<AddEvent />} />
  <Route path='eventlist/edit' element={<EditEvent />} />
  <Route path='about' element={<About />} />
  <Route path='item' element={<AddItem />} />
  <Route path='dash' element={<Dashboard/>} />
  </Routes>
  
  
  </BrowserRouter>
  </GlobalProvider>
  
);




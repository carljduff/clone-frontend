import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import './css/navbar.css'
import { useState } from 'react';

function App() {
  const [events, setEvents] = useState([])

  return (
    <>

  
  <NavBar/>
  <Home />


</>
  );
}

export default App;

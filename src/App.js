import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import React from 'react';

function App() {


  

  return (
    <div className="App">
    <NavBar/>
    <Home/>
    <Login/>
    </div>
  );
}

export default App;

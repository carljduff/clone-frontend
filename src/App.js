import './App.css';
import Home from './pages/Home';
import {Outlet} from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import React from 'react';
import './css/modal.css';
import EditModal from './components/EditModal';
function App() {

  

  
    return(
      <GlobalProvider>
        <EditModal/>
        <Outlet/>
      </GlobalProvider>
    )
}

export default App;

import './App.css';
import Home from './pages/Home';
import {Outlet} from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState'
import EventList from './components/EventList'
import Dashboard from './components/Dashboard'


function App() {
  // if (localStorage.getItem("user") === null) {
    return(
      <GlobalProvider>
        <Home/>
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

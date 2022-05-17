import { Link, Outlet } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import "../css/navbar.css";
import logo from '../images/opendish.png'
import logotext from '../images/logotext.png'
import logopic from '../images/logopic.png'
const NavBar = () => {
  const [state, dispatch] = useGlobalState();

  return (
    <div className="nav-main">
     
      <div className="nav-text">
      
      <a href="">Home</a>
      
      <Link to="/about">About</Link>
      
      
      {state.currentUser && <Link to="/dash">Dashboard</Link>}
      
      {/* {state.currentUser && <Link to="/profile">Profile</Link>} */}
      
      
        {!state.currentUser && (
          <Link to="/login">
    
              Log in
            
          </Link>
        )}
        
        <Outlet />
        </div>
      
    </div>
  );
};

export default NavBar;

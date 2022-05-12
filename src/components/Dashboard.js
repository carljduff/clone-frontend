import { Link } from "react-router-dom";

import { useGlobalState } from "../context/GlobalState";
import "../css/dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = (props) => {
  const [state, dispatch] = useGlobalState();
  let navigate = useNavigate();

  const signout = () => {
    localStorage.removeItem("user");
    navigate("/", { replace: true });
    window.location.reload();
  };

  return (
    <div className="dash-container">
      <div className="dash-nav">
        <h6 className="greeting">Hi, *first name*</h6>
        <Link to="/">Home</Link>
        <a href="">Planning</a>

        {state.currentUser && <Link to="/profile">Profile</Link>}
        <a href="">Connections</a>
        <Link to="/">
          <button onClick={signout}>Sign Out</button>
        </Link>
      </div>
      {props.children}
    </div>
  );
};

export default Dashboard;

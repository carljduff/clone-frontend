// import { Outlet } from "react-router-dom";
// import { GlobalProvider } from '../context/GlobalState'
// import Navbar from '../components/Navbar';


function AuthLogin() {
    return(
    <GlobalProvider>
        <Navbar />
        <Outlet />
    </GlobalProvider>
    )
}

export default AuthLogin;
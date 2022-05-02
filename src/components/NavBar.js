import { Link, Outlet } from 'react-router-dom'
import { useGlobalState } from '../context/GlobalState'
import '../css/navbar.css'

const NavBar = () => {
    const [ state, dispatch ] = useGlobalState();

    return (
   
        <div className="nav-main">
           

            <a href="">Home</a>
            <Link to='/about'>About</Link>
            <a href="">Blog</a>

            <Link to='/eventlist'>Events</Link>
           <div className='nav-btn'>
               {
                   !state.currentUser && (
                    <Link to='/login'><button href="../pages/Login" className='btn'>Log in</button></Link>
                   )
               }
               {
                   !state.currentUser && (
                    <Link to='/register'><button className='btn'>Sign Up</button></Link>
                   )
               }
               {
                   state.currentUser && (
                    <Link to='/profile'>Profile</Link>
                   )
               }
               <Link to='/addevent'>Add Event</Link>
               <Outlet/>
          </div>
    </div>
    )
}

export default NavBar;
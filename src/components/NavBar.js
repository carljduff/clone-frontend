
import '../css/navbar.css'

const NavBar = () => {


    return (
   
        <div className="nav-main">
           

            <a href="">Pricing</a>
            <a href="">About</a>
            <a href="">Blog</a>

            <div className='nav-btn'>
            <button href="../pages/Login" className='btn'>Log in</button>
            <button className='btn'>Sign Up</button>
            
            </div>
    </div>
    )
}

export default NavBar;
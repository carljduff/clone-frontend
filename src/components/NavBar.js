// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import Container from 'react-bootstrap/Container'
import '../css/navbar.css'
const NavBar = () => {
    return (
   
        <div className="nav-main">
           

            <a href="">Pricing</a>
            <a href="">About</a>
            <a href="">Blog</a>

            <div className='nav-btn'>
            <button>Log in</button>
            <button>Sign Up</button>
            </div>
        
        
     
        {/* <Navbar className='nav'>
    <Container>
    <Nav>
    <Nav.Link className='nav-text' href="/">Pricing</Nav.Link>
      <Nav.Link className='nav-text' href="../pages/Blog">About</Nav.Link>
      <Nav.Link className='nav-text' href="#pricing">Blog</Nav.Link>
    </Nav>
    </Container>
  </Navbar> */}
    </div>
    )
}

export default NavBar;
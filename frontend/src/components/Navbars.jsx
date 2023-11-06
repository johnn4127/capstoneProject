import React from 'react'
import { Link } from 'react-router-dom'

//Style imports
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/Navbar.css'
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navbars = () => {
  return (
    <div>
        <div>
        <Navbar className='navbar'  data-bs-theme="dark">
        <Container>
        <Link style={{textDecoration:'none'}} to="/">
          <Navbar.Brand className='homeNavButton' href="#home">Capstone</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Nav.Link className='navButton' as={Link} to='/'>Login</Nav.Link>
            <Nav.Link className='navButton' as={Link} to="/registration">Registration</Nav.Link>
            <Nav.Link className='navButton' as={Link} to='/profile'>Profile</Nav.Link>
            <Nav.Link className='navButton' as={Link} to='/game'>Game</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    </div>
  )
}

export default Navbars
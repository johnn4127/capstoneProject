import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Navbars = () => {
  return (
    <div>
        <div>
        
        <Navbar bg="primary" data-bs-theme="dark">
          
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
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'; 
import Profile from './Profile';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import '../stylesheets/Login.css'
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); 
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        setLoggedIn(true);
        navigate('/profile');
      } else if (response.status === 401) {
        const data = await response.json(); 

        if (data.message === 'Unknown email') {
          setErrorMessage('No user found with this email'); 
        } else {
          setErrorMessage('Invalid email or password');
        }
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An error occurred during login');
    }
  };

  return (
    <div className='mainBody'>
      
    <div className="d-flex justify-content-center align-items-start" style={{ minHeight: '100vh' }}>
      <div className=" rounded p-4" style={{ marginTop: '50px' }}>
      <h1 style={{fontSize:'75px'}} className="text-center">Login</h1>
        <Form className='forms'>
          <Form.Group style={{width:'100%',height:'200%'}} controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
          </Form.Group>

          <div style={{ textAlign: 'center', margin: '10px' }}>
            <Button style={{width:'100px', height:'40px', fontSize:'20px'}} onClick={handleLogin} variant="primary" type="button">
              Submit
            </Button>
            <Link style={{textDecoration:'none', marginTop:'10px'}} to="/registration">
            <a  ><p style={{marginTop:'10px', color:'white', fontSize:'20px'}} >Need to Register?</p></a>
            </Link>
          </div>
          <div style={{fontSize:'50%'}}>
          {errorMessage && (
            <Alert variant="danger">
              {errorMessage}
            </Alert>
          )}
          </div>
        </Form>
      </div>
    </div>
    </div>
  );
};

export default Login;

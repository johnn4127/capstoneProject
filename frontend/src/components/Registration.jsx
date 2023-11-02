import React, { useState, useEffect } from 'react';
import mp3 from '../assets/music/Registration.mp3';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import '../stylesheets/Registration.css'
function RegisterForm() {
  const audio = new Audio(mp3);
  
  

  

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async () => {
    if (formData.password !== formData.confirmPassword) {
     
      setRegistrationStatus('passwordMismatch');
      return;
      
    }

    if (!formData.email.trim() || !formData.password.trim()) {

      setRegistrationStatus('emailPasswordError');
      return;
    }

    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.status === 200) {
      setRegistrationStatus('success');
    } else if (response.status === 409) {

      setRegistrationStatus('emailTaken');
    } else {
 
      setRegistrationStatus('failure');
    }
  };

  useEffect(() => {
    audio.play();
  }, []);

  return (
    <div className='mainContainer'>
      <h1 style={{fontSize:'75px',marginTop:'100px'}} className="text-center">Registration</h1>
    <Container
      className="d-flex justify-content-center align-items-start"
      style={{ minHeight: '100vh' }}
    >
      <div  style={{ marginTop: '0px', }}>
        
        <Form>
          <Form.Group  controlId="formBasicEmail">
            <Form.Label style={{margin:'10px'}}>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{margin:'10px'}}>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword">
            <Form.Label style={{margin:'10px'}}>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </Form.Group>
            <div style={{justifyContent:''}}></div>
          <div style={{ textAlign: 'center', margin: '10px' }}>
            <Button style={{width:'100px', height:'40px', fontSize:'65%'}} variant="primary" type="button" onClick={handleRegister}>
              Register
            </Button>
          </div>
        <div style={{ textAlign: 'center', margin: '10px' }}>
          <Link to="/login">
            <Button style={{width:'100px', height:'40px', fontSize:'65%'}} variant="primary" type="button">
              Login
            </Button>
            </Link>
        </div>
        </Form>
        <div style={{fontSize:'41%',}}>
        {registrationStatus === 'success' && (
          <Alert variant="success" className="mt-3">
            Registration successful!
          </Alert>
        )}
        {registrationStatus === 'failure' && (
          <Alert variant="danger" className="mt-3">
            Registration failed. Please try again.
          </Alert>
        )}
        {registrationStatus === 'passwordMismatch' && (
          <Alert variant="danger" className="mt-3">
            Password and confirmation do not match.
          </Alert>
        )}
        {registrationStatus === 'emailPasswordError' && (
          <Alert variant="danger" className="mt-3">
            Please enter a valid email address and password.
          </Alert>
        )}
        {registrationStatus === 'emailTaken' && (
          <Alert variant="danger" className="mt-3">
            This email is already taken. Please use a different email.
          </Alert>
        )}
        </div>
      </div>
    </Container>
    </div>
  );
}

export default RegisterForm;

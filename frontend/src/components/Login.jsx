import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Profile from './Profile';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      // CHANGE THIS ONCE YOU'VE DEPLOYED THE SERVER HEREHEHREHRHERHERHEHREHRE
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
      } else {
        
        console.log('Login failed');
      }
    } catch (error) {
      
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      {loggedIn ? (
        <Profile />
      ) : (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
          </Form.Group>

          <Button onClick={handleLogin} variant="primary" type="button">
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
};

export default Login;

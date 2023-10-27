import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Profile from './Profile'; // Import your Profile component

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loggedIn, setLoggedIn] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (response.status === 200) {
      // Successful login
      setLoggedIn(true);
    } else {
      // Handle unsuccessful login
      // You can display an error message to the user, for example.
    }
  };

  return (
    <div>
      {loggedIn ? (
        
        <Profile />
      ) : (
        
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
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

export default Login
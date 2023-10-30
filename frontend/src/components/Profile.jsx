import React, {useState,useEffect} from 'react'
import { Button,Form,Container, Card, ListGroup } from 'react-bootstrap';
const Profile = () => {
  const [users, setUsers] = useState('');
  const [formData, setFormData] = useState({
    characterName: '',
    confidence: '',
  });

  const fetchUsersData = async () => {
    const response = await fetch('http://localhost:3000/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setUsers(response)
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handlesave = async () => {
    const response = await fetch('http://localhost:3000/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })};

  useEffect(() => {
    fetchUsersData(); // Call the fetch function
  }, []);
  return (

   
      <Container id='hello'>
      <h2>Users:{users.id}</h2>
      
      <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Character Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter character name"
              name="characterName"
              value={formData.characterName}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confidence</Form.Label>
            <Form.Control
              type="number"
              placeholder="Confidence"
              name="confidence"
              value={formData.confidence}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button onClick={handlesave} variant="primary" type="button">
            Save Character
          </Button>
        </Form>
    </Container>
  );
};

   

 

export default Profile
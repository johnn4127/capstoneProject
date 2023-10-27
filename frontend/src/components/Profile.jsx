import React, {useState,useEffect} from 'react'
import { Container, Card, ListGroup } from 'react-bootstrap';
const Profile = () => {
  const [users, setUsers] = useState([]);


  const fetchUsersData = async () => {
    try {
      const response = await fetch('http://localhost:5500/register');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchUsersData(); // Call the fetch function
  }, []);
  return (
   
      <Container id='hello'>
      <h2>Users:</h2>
      {users.map((users) => (
        <Card key={users.id} style={{ marginBottom: '20px' }}>
          <Card.Header>Name: {users.email}</Card.Header>
          <Card.Body>

          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

   

export default Profile
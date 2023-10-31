import React, { useState, useEffect } from 'react';
import { Form, Nav } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useCharacter } from './CharacterContext'; // Import the useCharacter hook

const Profile = () => {
  const [newCharName, setNewCharName] = useState('');
  const { userId } = useParams();
  const { charName, setCharacterName } = useCharacter();

  const fetchUsersData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/profile/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        const charName = data.charName;
        setCharacterName(charName);
      } else {
        console.error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('An error occurred while fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, [userId]);

  const handleInputChange = (e) => {
    setNewCharName(e.target.value);
  };

  const updateCharacterName = () => {
    setCharacterName(newCharName);
  };

  return (
    <>
      <h2>CHARACTERS</h2>

      <Form.Label>Character Name: {charName}</Form.Label>

      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Enter new character name"
          value={newCharName}
          onChange={handleInputChange}
        />
        <button onClick={updateCharacterName}>Update Character Name</button>
      </Form.Group>

      <Nav.Link className="navButton" as={Link} to="/battle">
        Start Game
      </Nav.Link>
    </>
  );
};

export default Profile;

import React, { useState, useEffect } from 'react';
import { Form, Nav } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useCharacter } from './CharacterContext';
import { usePicture } from './PictureContext'; 
// import controls from '../assets/images/letter_a.png';

import char2 from '../assets/images/chris2.png';
import char1 from '../assets/images/chris.png';
import { useSelectedChar } from './SelectedCharContext';
const Profile = () => {
  const [newCharName, setNewCharName] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(<char1/>); 
  const { userId } = useParams();
  const { setSelectedChar } = useSelectedChar();
  const handleCharacterSelect = (characterImage) => {
    setSelectedChar(characterImage);};


  const { selectedPicture, setPicture } = usePicture();
  const { charName, setCharacterName } = useCharacter();
  const handlePictureSelect = (picture) => {
    setPicture(picture);
  };

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

      <Nav.Link className="navButton" as={Link} to="/game">
        Start Game
      </Nav.Link>

      <div>
        <h2>CHOOSE YOUR CHARACTER</h2>
        <button onClick={() => handlePictureSelect(char1)}>
          <img style={{width:"50px"}} src={char1} alt="Picture 1" />
        </button>
        <button onClick={() => handlePictureSelect(char2)}>
          <img style={{width:"50px"}} src={char2} alt="Picture 2" />
        </button>
      </div>

      <div>
        <h3>Selected CHARACTER</h3>
        
          <img src={selectedPicture} alt="HELLO?" style={{width:"50px"}} />
        
      </div>
    </>
  );
};

export default Profile;

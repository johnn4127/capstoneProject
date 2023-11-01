import React, { useState, useEffect } from 'react';
import { Form, Nav } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useCharacter } from './CharacterContext';
import { usePicture } from './PictureContext'; // Import the new context
// import controls from '../assets/images/letter_a.png';
import char1 from '../assets/images/letter_a.png';
import char2 from '../assets/images/letter_d.png';
import { useSelectedChar } from './SelectedCharContext';
const Profile = () => {
  const [newCharName, setNewCharName] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(char1); // Default character
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

      <Nav.Link className="navButton" as={Link} to="/battle">
        Start Game
      </Nav.Link>

      <div>
        <h2>CHOOSE YOUR CHARACTER</h2>
        <button onClick={() => handleCharacterSelect(char1)}>
          <img src={char1} alt="Character 1" />
        </button>
        <button onClick={() => handleCharacterSelect(char2)}>
          <img src={char2} alt="Character 2" />
        </button>
      </div>

      <div>
        <h3>Selected Character</h3>
        <img src={selectedCharacter} alt="Selected Character" />
      </div>

      <div>
        <h2>CHOOSE YOUR PICTURE</h2>
        <button onClick={() => handlePictureSelect(char1)}>
          <img src={char1} alt="Picture 1" />
        </button>
        <button onClick={() => handlePictureSelect(char2)}>
          <img src={char2} alt="Picture 2" />
        </button>
      </div>

      <div>
        <h3>Selected Picture</h3>
        {selectedPicture && (
          <img src={selectedPicture} alt="Selected Picture" />
        )}
      </div>
    </>
  );
};

export default Profile;

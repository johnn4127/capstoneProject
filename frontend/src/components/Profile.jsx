import React, { useState, useEffect } from 'react';
import { Form, Button, Nav } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useCharacter } from './CharacterContext';
import { usePicture } from './PictureContext';
import '../stylesheets/Profile.css';
import Player from './Player';
import char2 from '../assets/images/spin.gif';
import char3 from '../assets/images/pikachu.gif';
import char1 from '../assets/images/ghost.gif';
import char4 from '../assets/images/pug.gif';
import char5 from '../assets/images/star.gif';
import char6 from '../assets/images/cat.gif';
import { useSelectedChar } from './SelectedCharContext';

const Profile = () => {
  const [newCharName, setNewCharName] = useState('');
  const { userId } = useParams();
  const { setSelectedChar } = useSelectedChar();

  const { selectedPicture, setPicture } = usePicture();
  const { charName, setCharacterName } = useCharacter();
  const [isNameSet, setIsNameSet] = useState(false);
  const [isCharacterSelected, setIsCharacterSelected] = useState(false);

  const handlePictureSelect = (picture) => {
    setPicture(picture);
    setIsCharacterSelected(true);
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
        setIsNameSet(true);
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
    setIsNameSet(true);
  };

  const navigate = useNavigate();

  const startGame = (e) => {
    if (isNameSet && isCharacterSelected) {
      navigate('/game');
    } 
  };

  return (
    <div className="profilebackground">
      <div className='profileForm'>
        <h2>CHARACTER SELECTION</h2>
        <Form.Label>Character Name: {charName}</Form.Label>
        <Form.Group style={{ width: "400px" }}>
          <Form.Control
            type="text"
            placeholder="Enter new character name"
            value={newCharName}
            onChange={handleInputChange}
          />
          <Button style={{ margin: '20px' }} onClick={updateCharacterName}>Update Character Name</Button>
        </Form.Group>

        <div className="character-selection-container">
          <h2 style={{ margin: '20px' }}>CHOOSE YOUR CHARACTER</h2>
          <div className="character-selection-buttons">
          <button onClick={() => handlePictureSelect(char1)}>
            <img style={{ width: "100px", height: "120px" }} src={char1} alt="Picture 1" />
          </button>
          <button onClick={() => handlePictureSelect(char2)}>
            <img style={{ width: "100px", height: "120px" }} src={char2} alt="Picture 2" />
          </button>
          <button onClick={() => handlePictureSelect(char3)}>
            <img style={{ width: "100px", height: "120px" }} src={char3} alt="Picture 3" />
          </button>
          <br></br>
          <button onClick={() => handlePictureSelect(char4)}>
            <img style={{ width: "100px", height: "120px" }} src={char4} alt="Picture 4" />
          </button>
          <button onClick={() => handlePictureSelect(char5)}>
            <img style={{ width: "100px", height: "120px" }} src={char5} alt="Picture 5" />
          </button>
          <button onClick={() => handlePictureSelect(char6)}>
            <img style={{ width: "100px", height: "120px" }} src={char6} alt="Picture 6" />
          </button>
            
          </div>
        </div>
      </div>
      <div className='selectedchar'>
        <div className='selectedtitle'>
          <h3>Selected Character</h3>
        </div>
        
          <img src={selectedPicture} alt="Selected Character" />
        
        
          <p>{charName}</p>
        <Nav.Link className="startgamebutton" as={Link} to="/intro">
          <p className='startgamebutton' onClick={startGame}>Start Game</p>
        </Nav.Link>
      </div>
    </div>
  );
};

export default Profile;

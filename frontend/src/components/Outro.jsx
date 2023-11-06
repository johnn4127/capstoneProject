import React, { useState, useEffect } from 'react';
import '../stylesheets/Outro.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { usePicture } from './PictureContext';
import Girl from '../assets/images/save.gif';

const Outro = () => {
  const [message, setMessage] = useState('');
  const [textRenderingComplete, setTextRenderingComplete] = useState(false);
  const { selectedPicture } = usePicture();

  const endingMessage = "Thank you for saving our world from those monsters!! You will be remembered forever as a hero. Please come back whenever you want! ";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= endingMessage.length) {
        setMessage(endingMessage.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTextRenderingComplete(true);
      }
    }, 15);
  }, []);

  return (
    <div className="outro-container">
      <div className="characters-container">
        <div className="character">
          <img src={selectedPicture} alt="Selected Character" />
        </div>
        <div className="savegirl">
          <img src={Girl} alt="Savegirl" />
        </div>
      </div>
      <div className="dialogue-container">
        <p className="white-text">{message}</p>
        {textRenderingComplete && (
          <Nav.Link as={Link} to="/">
            <p className="startgamebuttonoutro">Back to Home</p>
          </Nav.Link>
        )}
      </div>
    </div>
  );
};

export default Outro;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//Context imports
import { usePicture } from './PictureContext';

//Style imports
import '../stylesheets/Intro.css';
import { Nav } from 'react-bootstrap';

const Intro = () => {
  //Contexts
  const { selectedPicture } = usePicture();

  //States
  const [story, setStory] = useState('');
  const [textRenderingComplete, setTextRenderingComplete] = useState(false);
  const fullStory =
    "Huh?! WHERE AM I ?? ALL I REMEMBER WAS I FELL ASLEEP LAST NIGHT AFTER STUDYING." +
    " Am I being teleported to a different world??? This has always been my dream! I hope I'll become a super hero or something!"
  ;

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullStory.length) {
        setStory(fullStory.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTextRenderingComplete(true);
      }
    }, 15);
  }, []);

  return (
    <div className="intro-container">
      <div className="background-image"></div>
      <div className="intro-content">
        <p className="white-text">{story}</p>
        {textRenderingComplete && (
          <Nav.Link as={Link} to="/game">
            <p className="startgamebuttonintro">Start Game</p>
          </Nav.Link>
        )}
      </div>
      <div className='battlecharacter rotating' >
        <img
          className='battlecharacter rotating'
          src={selectedPicture}
          alt="Selected Character"
        /> </div>

    </div>
  );
};

export default Intro;

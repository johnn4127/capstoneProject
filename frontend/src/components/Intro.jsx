import React, { useState, useEffect } from 'react';
import '../stylesheets/Intro.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Intro = () => {
  const [story, setStory] = useState(''); // State to manage the rendered story
  const [textRenderingComplete, setTextRenderingComplete] = useState(false); // State to track text rendering completion

  const fullStory =
    "Huh?! WHERE AM I ?? ALL I REMEMBER WAS I FELL ASLEEP LAST NIGHT AFTER STUDYING." +
    " You wake up in a place unlike any other. The surroundings are unfamiliar, and you find yourself in a world filled with magic and wonder. It's as if you've been transported to another realm." +
    " As you explore this new world, you discover that you possess unique abilities and a mission to fulfill. The journey begins, and your adventure in this isekai world commences.";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullStory.length) {
        setStory(fullStory.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTextRenderingComplete(true); // Set the rendering completion flag
      }
    }, 50); // Adjust the time interval (in milliseconds) to control the text rendering speed
  }, []);

  return (
    <div className="intro-container">
      <div className="background-image"></div>
      <div className="intro-content">
        <p className="white-text">{story}</p>
        {textRenderingComplete && (
          <Nav.Link as={Link} to="/game">
            <p className="startgamebutton">Start Game</p>
          </Nav.Link>
        )}
      </div>
    </div>
  );
};

export default Intro;

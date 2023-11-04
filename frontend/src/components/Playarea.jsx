import React, { useState, createContext, useContext, useEffect } from 'react'
import Background from './Background'
import Player from './Player'
import '../stylesheets/Game.css'
import Enemy from './Enemy'
import Boss from './Boss'
import { PlayerData, PositionData } from './Game'
import Shop from './Shop.jsx'
import Battle from './Battle'
import { usePicture } from './PictureContext';
import battlescreen from '../assets/images/battlebackground.gif'
import PauseMenu from './PauseMenu'



const Playarea = () => {
  const [pixelated, setPixelated] = useState(true); // Initial pixelation effect
  const [showTextBox, setShowTextBox] = useState(true); // State to control text box visibility
  const textBoxDuration = 10000; // 10 seconds in milliseconds

  useEffect(() => {
    // Hide the text box after the specified duration
    const hideTextBoxTimeout = setTimeout(() => {
      setShowTextBox(false);
    }, textBoxDuration);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(hideTextBoxTimeout);
  }, []); // Empty dependency arr
  useEffect(() => {
    
    const pixelationTimeout = setTimeout(() => {
      setPixelated(false);
    }, 700); // Adjust the delay as needed

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(pixelationTimeout);
  }, []);

  const { selectedPicture } = usePicture();
  
  const { player, setPlayer, battle, setBattle, shop, setShop, pause, setPause } = useContext(PlayerData)
  
  const { playerPosition, enemyPositions, statIndex, setStatIndex } = useContext(PositionData)

  const handlePause = (event) => {
    switch (event.key) {
      case ('Escape'):
          if(!pause && !battle && !shop){ 
              setPause(true)
          } else {
            setPause(false)
          }
          break;
  }

  }


  useEffect(() => {
    const handleKeyPress = (event) => {
      handlePause(event);
    };
  
    document.addEventListener('keydown', handleKeyPress);
  
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };

  }, [playerPosition, enemyPositions, statIndex, pause, handlePause])


  return (
    <div id='playArea'
    style={{
      width: '100vw',
      height: '100vh',
    }}>
      <div id='canvas'
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          backgroundImage:`url(${battlescreen})`,
          backgroundSize:'cover',
          backgroundRepeat:'no-repeat'
        }}
        className={`pixelated ${pixelated ? 'fade' : ''}`}>

          {!battle && !shop ? ( //if shop and battle are false render this
            <>
              <Background />
              
            {pause ? (
              <PauseMenu />
            ) : null}
            {showTextBox && (
          <div  style={{zIndex:1000}} className="herotextbox">UH OH THIS DOESN'T LOOK TOO GOOD</div>
        )}
              <Player />
              <Boss />
              {enemyPositions.map((enemyPosition, index) => (
                <Enemy key={index} index={index} />
              ))}

            </>
          ) : null}

          {battle ? ( //if battle is true render this
            <>
              <Battle enemyIndex={statIndex} />
            </>
          ) : null
          }
          
          {shop ? ( //if shop is true render this
            <>
              <Shop />
            </>
          ) : null}


      </div>
    </div>
  )
}
export default Playarea
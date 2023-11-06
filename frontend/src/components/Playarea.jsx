import React, { useState, useContext, useEffect } from 'react'

//Context imports
import { PlayerData, PositionData } from './Game'
import { usePicture } from './PictureContext';

//Component imports
import Background from './Background'
import Player from './Player'
import Enemy from './Enemy'
import Boss from './Boss'
import Shop from './Shop.jsx'
import Battle from './Battle'
import PauseMenu from './PauseMenu'

//Style imports
import '../stylesheets/Game.css'

//Asset imports
import battlescreen from '../assets/images/battlebackground.gif'

const Playarea = () => {
  const [pixelated, setPixelated] = useState(true);
  const [showTextBox, setShowTextBox] = useState(true);
  const textBoxDuration = 10000;

  useEffect(() => {

    const hideTextBoxTimeout = setTimeout(() => {
      setShowTextBox(false);
    }, textBoxDuration);


    return () => clearTimeout(hideTextBoxTimeout);
  }, []);
  useEffect(() => {

    const pixelationTimeout = setTimeout(() => {
      setPixelated(false);
    }, 700);


    return () => clearTimeout(pixelationTimeout);
  }, []);

  const { selectedPicture } = usePicture();

  const { battle, shop, pause, setPause } = useContext(PlayerData)

  const { playerPosition, enemyPositions, statIndex } = useContext(PositionData)

  const handlePause = (event) => {
    switch (event.key) {
      case ('Escape'):
        if (!pause && !battle && !shop) {
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
          backgroundImage: `url(${battlescreen})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        className={`pixelated ${pixelated ? 'fade' : ''}`}>

        {!battle && !shop ? (
          <>
            <Background />

            {pause ? (
              <PauseMenu />
            ) : null}
            {showTextBox && (
              <div style={{ zIndex: 1000 }} className="herotextbox">UH OH THIS DOESN'T LOOK TOO GOOD</div>
            )}
            
            <Player />

            {enemyPositions.map((enemyPosition, index) => (
              <Enemy key={index} index={index} />
            ))}

          </>
        ) : null}

        {battle ? ( //renders battle component if 'battle' is true. If not renders nothing.
          <>
            <Battle enemyIndex={statIndex} />
          </>
        ) : null
        }

        {shop ? ( //renders battle component of 'shop' is true. If not renders nothing.
          <>
            <Shop />
          </>
        ) : null}

      </div>
    </div>
  )
}
export default Playarea
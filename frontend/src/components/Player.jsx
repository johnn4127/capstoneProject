// Playarea.js
import React, { useState, createContext, useContext, useEffect } from 'react';
import Background from './Background';
import Player from './Player';
import '../stylesheets/Game.css';
import Enemy from './Enemy';
import Boss from './Boss';
import { PlayerData, PositionData } from './Game';
import Shop from './Shop.jsx';
import Battle from './Battle';
import { usePicture } from './PictureContext';
import battlescreen from '../assets/images/battlebackground.gif';
import PauseMenu from './PauseMenu';

const Playarea = () => {
  const [pixelated, setPixelated] = useState(true);

  useEffect(() => {
    const pixelationTimeout = setTimeout(() => {
      setPixelated(false);
    }, 700);

    return () => clearTimeout(pixelationTimeout);
  }, []);

  const { selectedPicture } = usePicture();

  const {
    player,
    setPlayer,
    battle,
    setBattle,
    shop,
    setShop,
    pause,
    setPause,
    handleEnemyDefeat // Add handleEnemyDefeat from PlayerData
  } = useContext(PlayerData);

  const {
    playerPosition,
    enemyPositions,
    statIndex,
    setStatIndex,
    handleStatIndex // Add handleStatIndex from PositionData
  } = useContext(PositionData);

  const handlePause = (event) => {
    switch (event.key) {
      case 'Escape':
        if (!pause && !battle && !shop) {
          setPause(true);
        } else {
          setPause(false);
        }
        break;
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      handlePause(event);
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [playerPosition, enemyPositions, statIndex, pause, handlePause]);

  const defeatEnemy = () => {
    if (battle && !shop) {
      handleEnemyDefeat(); // Call the function to handle enemy defeat
    }
  };

  useEffect(() => {
    defeatEnemy(); // Call the function to check for enemy defeat
  }, [battle, shop]);

  return (
    <div
      id="playArea"
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <div
        id="canvas"
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          backgroundImage: `url(${battlescreen})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className={`pixelated ${pixelated ? 'fade' : ''}`}
      >
        {!battle && !shop ? (
          <>
            <Background />
            {pause ? <PauseMenu /> : null}
            <Player />
            <Boss />
            {enemyPositions.map((enemyPosition, index) => (
              <Enemy key={index} index={index} />
            ))}
          </>
        ) : null}
        {battle ? (
          <>
            <Battle enemyIndex={statIndex} />
          </>
        ) : null}
        {shop ? (
          <>
            <Shop />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Playarea;

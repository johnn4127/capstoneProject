import React, { useState, createContext, useContext, useEffect } from 'react';
import Background from './Background';
import Player from './Player';
import Enemy from './Enemy';
import Boss from './Boss';
import { PlayerData } from './Game';
import Shop from './Shop';
import Battle from '../Battle';

export const PositionData = createContext();

const Playarea = ({ selectedCharacter }) => {
  const { player, setPlayer, battle, setBattle, shop, setShop } = useContext(PlayerData);

  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: -350, width: 100 });
  const [enemyPosition, setEnemyPosition] = useState({ x: 400, y: 120, width: 100 });
  const [bossPosition, setBossPosition] = useState({ x: 1200, y: -600, width: 300 });

  const checkCollision = () => {
    // Your collision detection code here
  };

  const endBattle = () => {
    setBattle(false);
    setShop(true);
  };

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      checkCollision();
    });
  }, [playerPosition, enemyPosition]);

  return (
    <div id="playArea">
      <div id="canvas">
        <PositionData.Provider value={{ playerPosition, setPlayerPosition, enemyPosition, setEnemyPosition, bossPosition, setBossPosition }}>
          {!battle && !shop ? (
            <>
              <Background />
              <Player />
              <Boss />
              <Enemy />
            </>
          ) : null}

          {battle ? (
            <>
              <Battle />
              <button onClick={endBattle}>End Battle</button>
            </>
          ) : null}

          {shop ? (
            <>
              <Shop />
            </>
          ) : null}

          {selectedCharacter && (
            <img
              src={selectedCharacter}
              alt="Player 1"
              style={{ position: 'absolute', top: playerPosition.y, left: playerPosition.x }}
            />
          )}
        </PositionData.Provider>
      </div>
    </div>
  );
};

export default Playarea;

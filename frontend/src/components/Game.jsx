// Game.js
import React, { useState, createContext } from 'react';
import Playarea from './Playarea';
import { usePicture } from './PictureContext';

export const PlayerData = createContext();
export const PositionData = createContext();

const Game = () => {
  const [player, setPlayer] = useState({
    proficiency: 50,
    confidence: 200,
    maxConfidence: 200,
    skills: [],
    exp: 0, 
  });

  const [battle, setBattle] = useState(false);
  const [shop, setShop] = useState(false);
  const [pause, setPause] = useState(false);

  const [enemies, setEnemies] = useState([
    { proficiency: 10, confidence: 100, maxConfidence: 100, exp: 100 },
    { proficiency: 12, confidence: 200, maxConfidence: 200, exp: 300 },
    { proficiency: 15, confidence: 350, maxConfidence: 350, exp: 500 }
  ]);

  const [boss, setBoss] = useState({
    proficiency: 20,
    confidence: 500,
    maxConfidence: 500,
    exp: 1000,
    defeated: false
  });

  const [playerPosition, setPlayerPosition] = useState({
    x: 30,
    y: 200,
    width: 100,
    defeated: false
  });

  const [enemyPositions, setEnemyPositions] = useState([
    { x: 400, y: 200, width: 100, defeated: false },
    { x: 800, y: 200, width: 100, defeated: false },
    { x: 1200, y: 200, width: 100, defeated: false }
  ]);

  const [statIndex, setStatIndex] = useState(0);

  const handleStatIndex = () => {
    if (statIndex < enemies.length - 1) {
      setStatIndex(statIndex + 1);
    } else {
      setBattle(false);
    }
  };

  const [bossPosition, setBossPosition] = useState({
    x: 1600,
    y: -600,
    width: 300
  });

  const handleEnemyDefeat = () => {
    const defeatedEnemy = enemies[statIndex];
    setPlayer(prevPlayer => ({
      ...prevPlayer,
      exp: prevPlayer.exp + defeatedEnemy.exp 
    }));
    defeatedEnemy.defeated = true;
    const updatedEnemyPositions = [...enemyPositions];
    updatedEnemyPositions[statIndex] = {
      ...updatedEnemyPositions[statIndex],
      defeated: true
    };
    setEnemyPositions(updatedEnemyPositions);
    handleStatIndex();
  };

  const { selectedPicture } = usePicture();

  return (
    <PlayerData.Provider value={{ player, setPlayer, enemies, setEnemies, battle, setBattle, shop, setShop, pause, setPause, handleEnemyDefeat }}>
      <PositionData.Provider value={{ playerPosition, setPlayerPosition, enemyPositions, setEnemyPositions, bossPosition, setBossPosition, statIndex, setStatIndex, handleStatIndex }}>
        <Playarea />
      </PositionData.Provider>
    </PlayerData.Provider>
  );
};

export default Game;

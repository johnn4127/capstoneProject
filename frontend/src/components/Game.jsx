import React, { useState, createContext } from 'react';
import Playarea from './Playarea';


export const PlayerData = createContext();
export const PositionData = createContext()

const Game = () => {

  const [player, setPlayer] = useState({ proficiency: 15, confidence: 200, maxConfidence: 200, skills: [], exp: 0 })
  const [battle, setBattle] = useState(false) //controls rendering of battle component
  const [shop, setShop] = useState(false) //controls rendering of shop component

  const [enemies, setEnemies] = useState([
    { proficiency: 10, confidence: 100, maxConfidence: 100, exp: 100 },
    { proficiency: 12, confidence: 200, maxConfidence: 200, exp: 300 },
    { proficiency: 15, confidence: 350, maxConfidence: 350, exp: 500 }])
  const { boss, setBoss } = useState({ proficiency: 20, confidence: 500, maxConfidence: 500, exp: 1000, defeated: false })


  const [playerPosition, setPlayerPosition] = useState({ x: 30, y: 365, width: 100, defeated: false }) //sets initial position of player avatar

  const [enemyPositions, setEnemyPositions] = useState([ //sets the position data for different enemies
    { x: 400, y: 365, width: 100, defeated: false },
    { x: 800, y: 365, width: 100, defeated: false },
    { x: 1200, y: 365, width: 100, defeated: false },
  ]);

  const [statIndex, setStatIndex] = useState(0)

  const handleStatIndex = () => setStatIndex(statIndex + 1)

  const [bossPosition, setBossPosition] = useState({ x: 1600, y: -600, width: 300 }) //sets initial position of player avatar

  return (
    <PlayerData.Provider value={{ player, setPlayer, enemies, setEnemies, battle, setBattle, shop, setShop }}>
      <PositionData.Provider value={{ playerPosition, setPlayerPosition, enemyPositions, setEnemyPositions, bossPosition, setBossPosition, statIndex, setStatIndex, handleStatIndex }}>

        <Playarea />

      </PositionData.Provider>

    </PlayerData.Provider>
  );
};

export default Game;

import React, { useState, createContext, Component } from 'react';

//Context imports
import { usePicture } from './PictureContext';

//Component imports
import Playarea from './Playarea';
import Outro from './Outro';
//Asset imports
import enemy1 from '../assets/images/bossenemy.png'
import BossEnemy from '../assets/images/boss.gif'
import bats from '../assets/images/bat.gif'
import dinosaur from '../assets/images/dinosaur.gif'
import shadow from '../assets/images/shadow.gif'
import robot from '../assets/images/robot.gif'
import robot2 from '../assets/images/robot2.gif'
import gorilla from '../assets/images/gorilla.gif'

export const PlayerData = createContext();
export const PositionData = createContext();

const Game = () => {
  const [player, setPlayer] = useState({
    proficiency: 15,
    confidence: 500,
    maxConfidence: 500,
    skills: [],
    exp: 0, 
  });

  const [battle, setBattle] = useState(false);
  const [shop, setShop] = useState(false);
  const [pause, setPause] = useState(false);

  const [enemies, setEnemies] = useState([
    { proficiency: 10, confidence: 100, maxConfidence: 100, exp: 100 },
    { proficiency: 12, confidence: 200, maxConfidence: 200, exp: 300 },
    { proficiency: 15, confidence: 350, maxConfidence: 350, exp: 500 },
    { proficiency: 18, confidence: 500, maxConfidence: 500, exp: 750 },
    { proficiency: 24, confidence: 700, maxConfidence: 700, exp: 1000 },
    { proficiency: 30, confidence: 700, maxConfidence: 700, exp: 1250 },
    { proficiency: 36, confidence: 700, maxConfidence: 700, exp: 1500 },
    { proficiency: 55, confidence: 1000, maxConfidence: 1000, exp: 1500000000 }
  ]);

  const [enemyPositions, setEnemyPositions] = useState([
    { img: bats, x: 250, y: 180, height: 100, width: 100, defeated: false, active: true },
    { img: shadow, x: 500, y: 340, height: 100, width: 100, defeated: false, active: false },
    { img: robot, x: 80, y: 390, height: 100, width: 100, defeated: false, active: false },
    { img: robot2, x: 230, y: 545, height: 100, width: 100, defeated: false, active: false },
    { img: gorilla, x: 730, y: 700, height: 100, width: 100, defeated: false, active: false },
    { img: enemy1, x: 580, y: 100, height: 100, width: 100, defeated: false, active: false },
    { img: dinosaur, x: 950, y: 180, height: 100, width: 100, defeated: false, active: false },
    { img: BossEnemy, x: 1000, y: 40, height: 475, width: 300, defeated: false, active: false }
  ]);
  
  
  const [boss, setBoss] = useState({
    proficiency: 20,
    confidence: 500,
    maxConfidence: 500,
    exp: 1000,
    defeated: false,
    active: false
  });

  const [playerPosition, setPlayerPosition] = useState({
    x: 140,
    y: 60,
    width: 100,
    defeated: false
  });

  const [statIndex, setStatIndex] = useState(0);

  const handleStatIndex = () => {
    if (statIndex < enemies.length - 1) {
      setStatIndex(statIndex + 1);
    } else {
      setBattle(false);
    }
  };
 
  


  return (
    <PlayerData.Provider value={{ player, setPlayer, enemies, setEnemies, boss, setBoss ,battle, setBattle, shop, setShop, pause, setPause }}>
      <PositionData.Provider value={{ playerPosition, setPlayerPosition, enemyPositions, setEnemyPositions, statIndex, setStatIndex, handleStatIndex }}>
      <Playarea  />
      </PositionData.Provider>
    </PlayerData.Provider>
  );
};

export default Game;

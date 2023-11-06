import React, { useState, createContext } from 'react';

//Component imports
import Playarea from './Playarea';

//Context imports
import { usePicture } from './PictureContext';

//Asset imports
import enemy1 from '../assets/images/bossenemy.png'
import BossEnemy from '../assets/images/Boss.gif'

//Created Contexts
export const PlayerData = createContext();
export const PositionData = createContext();

const Game = () => {

  //States
  const [player, setPlayer] = useState({ //State to represent player stats
    proficiency: 15,
    confidence: 500,
    maxConfidence: 500,
    skills: [],
    exp: 0,
  });

  const [playerPosition, setPlayerPosition] = useState({//State to represent positional data of player
    x: 140,
    y: 60,
    width: 100,
    defeated: false
  });

  const [enemies, setEnemies] = useState([ //State to represent stats of various enemies
    { proficiency: 10, confidence: 100, maxConfidence: 100, exp: 100 },
    { proficiency: 12, confidence: 200, maxConfidence: 200, exp: 300 },
    { proficiency: 15, confidence: 350, maxConfidence: 350, exp: 500 },
    { proficiency: 18, confidence: 500, maxConfidence: 500, exp: 750 },
    { proficiency: 24, confidence: 700, maxConfidence: 700, exp: 1000 },
    { proficiency: 30, confidence: 700, maxConfidence: 700, exp: 1250 },
    { proficiency: 36, confidence: 700, maxConfidence: 700, exp: 1500 }
  ]);

  const [enemyPositions, setEnemyPositions] = useState([//State to represent postional data of enemies
    { img: enemy1, x: 250, y: 180, width: 100, defeated: false, active: true },
    { img: '', x: 500, y: 340, width: 100, defeated: false, active: false },
    { img: enemy1, x: 80, y: 390, width: 100, defeated: false, active: false },
    { img: '', x: 230, y: 545, width: 100, defeated: false, active: false },
    { img: '', x: 730, y: 700, width: 100, defeated: false, active: false },
    { img: enemy1, x: 580, y: 100, width: 100, defeated: false, active: false },
    { img: dinosaur, x: 950, y: 180, width: 100, defeated: false, active: false },
  ]);
  
  const [boss, setBoss] = useState({ //State to represent boss stats
    proficiency: 20,
    confidence: 500,
    maxConfidence: 500,
    exp: 1000,
    defeated: false
  });
  
  const [bossPosition, setBossPosition] = useState({ img: BossEnemy, x: 1020, y: 40, width: 300, defeated: false });

  const [statIndex, setStatIndex] = useState(0); //State to control which enemies are being interacted with
  const [battle, setBattle] = useState(false); //State to control rendering of battle component
  const [shop, setShop] = useState(false); //State to control rendering of shop component
  const [pause, setPause] = useState(false);

//Functions
  const handleStatIndex = () => { //Controls the incrementation of 'statIndex' state
    if (statIndex < enemies.length - 1) {
      setStatIndex(statIndex + 1);
    } else {
      setBattle(false);
    }
  };


  return (
    <PlayerData.Provider value={{ player, setPlayer, enemies, setEnemies, battle, setBattle, shop, setShop, pause, setPause }}>
      <PositionData.Provider value={{ playerPosition, setPlayerPosition, enemyPositions, setEnemyPositions, bossPosition, setBossPosition, statIndex, setStatIndex, handleStatIndex }}>
        <Playarea />
      </PositionData.Provider>
    </PlayerData.Provider>
  );
};

export default Game;

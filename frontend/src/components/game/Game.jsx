import React, { useState, createContext } from 'react';
import Playarea from './Playarea';

export const PlayerData = createContext();

const Game = () => {
  const [player, setPlayer] = useState({ proficiency: 15, confidence: 100, maxConfidence: 100, skills: [], exp: 0 });
  const [battle, setBattle] = useState(false);
  const [shop, setShop] = useState(false);

  return (
    <PlayerData.Provider value={{ player, setPlayer, battle, setBattle, shop, setShop }}>
      <Playarea/>
    </PlayerData.Provider>
  );
};

export default Game;

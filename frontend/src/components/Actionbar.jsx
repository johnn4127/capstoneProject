import React, {useState, createContext, useContext } from 'react'
import Skillaction from './Skillaction'
import { PlayerData } from './game/Game';
import { BattleContext } from './Battle';



const Actionbar = () => {

  const {player, setPlayer } = useContext(PlayerData)
  const { hidden, setHidden, handleHide, enemyCon, setEnemyCon, enemyLines, getRandomEnemyLine, setEnemyMessage ,setDamageLog } = useContext(BattleContext)

const handleAttack = () => {
  const damage = Math.floor(Math.random() * (15 - 5 + 1) + 5);


  setPlayer({...player, confidence: player.confidence - damage});


  setDamageLog(`You attacked Coding Enemy for ${damage} confidence damage.`);


  const enemyDamage = Math.floor(Math.random() * (15 - 5 + 1) + 5);
  setEnemyCon(enemyCon - enemyDamage);

  const enemyLine = getRandomEnemyLine();
  setEnemyMessage(`Coding Enemy: "${enemyLine}"`);


  setDamageLog(prevDamageLog => [
    `${prevDamageLog}`,
    `Coding Enemy attacked you for ${enemyDamage} confidence damage.`,
  ]);
};

  return (

    <div>
        <button onClick={handleAttack}>Proficiency</button>
        <button onClick={handleHide}> Skills</button>
        {!hidden ? (
        <div >
        <Skillaction/>
        </div>) 
         : null
         }
    </div>
  )
}

export default Actionbar
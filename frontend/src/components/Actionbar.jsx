import React, {useState, createContext, useContext } from 'react'
import Skillaction from './Skillaction'
import { PlayerData } from './game/Game';
import { BattleContext } from './Battle';



const Actionbar = () => {

  const {player, setPlayer } = useContext(PlayerData)
  const { hidden, setHidden, handleHide, enemyCon, setEnemyCon, enemyLines, getRandomEnemyLine, setEnemyMessage, setDamageLog } = useContext(BattleContext)

const handleAttack = () => {
  const playerDamage = Math.floor(Math.random() * (player.proficiency - 5 + 1) + 5);
  const enemyDamage = Math.floor(Math.random() * (10 - 5 + 1) + 5);


  setPlayer({...player, confidence: player.confidence - enemyDamage});
  setDamageLog(`You attacked Coding Enemy for ${playerDamage} confidence damage. `);




  const enemyLine = getRandomEnemyLine();
  setEnemyMessage(`Coding Enemy: "${enemyLine}"`);

  setEnemyCon(enemyCon - playerDamage);
  setDamageLog(prevDamageLog => [
    `${prevDamageLog}`,
    `Coding Enemy attacked you for ${enemyDamage} confidence damage.`,
  ]);

  if(playerDamage > enemyCon){
    setEnemyCon(0)
  }
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
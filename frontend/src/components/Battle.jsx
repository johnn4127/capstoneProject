import React, { useState, createContext, useContext, useEffect } from 'react';
import { useCharacter } from './CharacterContext';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../stylesheets/Battle.css';
import { PlayerData } from './Game';
import Actionbar from './Actionbar';
import { PositionData } from './Game';

export const BattleContext = createContext()

const Battle = ({ enemyIndex }) => {

  
  const [hidden, setHidden] = useState(true)
  const { enemyPositions, setEnemyPositions, handleStatIndex , playerPosition, setPlayerPosition} = useContext(PositionData)
  
  
  const handleHide = () => {
    if (hidden) {
      setHidden(false)
    }
    if (!hidden) {
      setHidden(true)
    }
  }
  
  const { player, setPlayer, setBattle, enemies, setEnemies } = useContext(PlayerData)
  
  const { charName } = useCharacter();
  
  const [currentEnemy, setCurrentEnemy] = useState(enemies[enemyIndex])
  const updatedEnemyPos = [...enemyPositions]

  const [enemyCon, setEnemyCon] = useState(currentEnemy.confidence);
  const [damageLog, setDamageLog] = useState('');
  const [enemyMessage, setEnemyMessage] = useState('');
  const [enemyLines, setEnemyLines] = useState([
    "Name a time you failed in life!",
    "Prepare to be coded out!",
    "I'm the master coder!",
    "Tell me about your salary expectations.",
    "What are some of your weaknesses?"
  ]);

  const getRandomEnemyLine = () => {
    const randomIndex = Math.floor(Math.random() * enemyLines.length);
    return enemyLines[randomIndex];
  };

  const endBattle = () => {
    if (enemyCon <= 0 || player.confidence <= 0) {

      setBattle(false)
      updatedEnemyPos[enemyIndex] = {...updatedEnemyPos[enemyIndex], defeated: true}
      setEnemyPositions(updatedEnemyPos)
      handleStatIndex()
      console.log(playerPosition)
      setPlayer({ ...player, confidence: player.maxConfidence })
    }
  }

  useEffect(() => {
    if(enemyCon === 0){
      handleStatIndex
    }
    endBattle()
  }, [enemyCon])

  return (
    <div>
      <h1>CODING BATTLE</h1>
      <div className="box">
        <div className="target-box">
          <h2>{charName}</h2>
          <ProgressBar now={player.confidence} label={`Confidence: ${player.confidence}`} min='0' max={player.maxConfidence} variant="success" />
        </div>
        <div className="target-box">
          <h2>CODING ENEMY</h2>
          <ProgressBar now={enemyCon} label={`Confidence: ${enemyCon}`} variant="danger" />
        </div>
      </div>
      <div>
      </div>
      <BattleContext.Provider value={{ hidden, setHidden, handleHide, enemyCon, setEnemyCon, enemyLines, getRandomEnemyLine, setEnemyMessage, setDamageLog }}>
        <p>It's your turn to attack</p>
        <div className="enemy-message-box">
          {enemyMessage && <p>{enemyMessage}</p>}
        </div>
        <div className="damage-info-box">
          {damageLog && <p>{damageLog}</p>}
          <Actionbar enemyIndex={ enemyIndex }/>
        </div>
      </BattleContext.Provider>
    </div>
  );
};

export default Battle;

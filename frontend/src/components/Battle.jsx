import React, { useState, createContext, useContext, useEffect } from 'react';
import { useCharacter } from './CharacterContext';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../stylesheets/Battle.css';
import { PlayerData } from './Game';
import Actionbar from './Actionbar';
import { usePicture } from './PictureContext'; 
export const BattleContext = createContext()
import enemy1 from '../assets/images/bossenemy.png'
const Battle = () => {
  const {selectedPicture} = usePicture();
  const [hidden, setHidden] = useState(true)


const handleHide = () => {
    if(hidden){
        setHidden(false)
    }
    if(!hidden){
        setHidden(true)
    }
}
  const { player, setPlayer, setBattle } = useContext(PlayerData)
  const { charName } = useCharacter();
  // const [playerCharCon, setPlayerCharCon] = useState(100);
  const [enemyCon, setEnemyCon] = useState(100);
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
    if(enemyCon <= 0){
      setBattle(false)
    setPlayer({...player, confidence: player.maxConfidence})}
  }
  useEffect(() =>{
    endBattle()
  }, [enemyCon])
  return (
    <div>
      <h1>CODING BATTLE</h1>
      <div className="box">
        <div className="target-box">
          <h2>{charName}</h2>
          <ProgressBar now={player.confidence} label={`Confidence: ${player.confidence}`} min='0' max={player.maxConfidence} variant="success" />
          <div>
          <img  className='battlecharacter' src={selectedPicture} alt="Selected Character" />
          </div>
        </div>
        <div className="target-box">
          <h2>CODING ENEMY</h2>
          <ProgressBar now={enemyCon} label={`Confidence: ${enemyCon}`} max={100} variant="danger" />
          <div style={{right:"5000px"}} >
    <img  className='battleenemy'src={enemy1}/>
    
    </div>
        </div>
      </div>
      <BattleContext.Provider value={{ hidden, setHidden, handleHide, enemyCon, setEnemyCon, enemyLines, getRandomEnemyLine, setEnemyMessage, setDamageLog }}>
        <p>It's your turn to attack</p>
        <div className="enemy-message-box">
          {enemyMessage && <p>{enemyMessage}</p>}
        </div>
        <div className="damage-info-box">
          {damageLog && <p>{damageLog}</p>}
          <Actionbar />
        </div>
      </BattleContext.Provider>
    </div>
  );
};

export default Battle;

import React, { useState } from 'react';
import { useCharacter } from './CharacterContext';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../stylesheets/Battle.css';

const Battle = () => {
  const { charName } = useCharacter();
  const [userCharacterConfidence, setUserCharacterConfidence] = useState(100);
  const [enemyConfidence, setEnemyConfidence] = useState(100);
  const [damageLog, setDamageLog] = useState('');
  const [enemyMessage, setEnemyMessage] = useState('');
  const [enemyLines, setEnemyLines] = useState([
    "Name a time you failed in life!",
    "Prepare to be coded out!",
    "I'm the master coder!",
    "Tell me about your salary expectations.",
    "What are some of your weaknesses"
  ]);

  const getRandomEnemyLine = () => {
    const randomIndex = Math.floor(Math.random() * enemyLines.length);
    return enemyLines[randomIndex];
  };

  const handleAttack = () => {
    const damage = Math.floor(Math.random() * (15 - 5 + 1) + 5);

    // User attack
    setUserCharacterConfidence(userCharacterConfidence - damage);

    // Update the damage log with the most recent damage
    setDamageLog(`You attacked Coding Enemy for ${damage} confidence damage.`);

    // Enemy's attack
    const enemyDamage = Math.floor(Math.random() * (15 - 5 + 1) + 5);
    setEnemyConfidence(enemyConfidence - enemyDamage);

    const enemyLine = getRandomEnemyLine();
    setEnemyMessage(`Coding Enemy: "${enemyLine}"`);

    // Add the enemy message to the damage log
    setDamageLog(prevDamageLog => [
      `${prevDamageLog}`,
      `Coding Enemy attacked you for ${enemyDamage} confidence damage.`,
    ]);
  };

  return (
    <div>
      <h1>CODING BATTLE</h1>
      <div className="box">
        <div className="target-box">
          <h2>{charName}</h2>
          <ProgressBar now={userCharacterConfidence} label={`Confidence: ${userCharacterConfidence}`} max={100} variant="success" />
        </div>
        <div className="target-box">
          <h2>CODING ENEMY</h2>
          <ProgressBar now={enemyConfidence} label={`Confidence: ${enemyConfidence}`} max={100} variant="danger" />
        </div>
      </div>
      <button onClick={handleAttack}>Attack</button>
      <p>It's your turn to attack</p>
      <div className="enemy-message-box">
        {enemyMessage && <p>{enemyMessage}</p>}
      </div>
      <div className="damage-info-box">
        {damageLog && <p>{damageLog}</p>}
      </div>
    </div>
  );
};

export default Battle;

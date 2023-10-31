import React, { useState } from 'react';
import { useCharacter } from './CharacterContext';
import '../stylesheets/Battle.css';

const Battle = () => {
  const [target1Charisma, setTarget1Charisma] = useState(100);
  const [target2Charisma, setTarget2Charisma] = useState(100);
  const [damageLogs, setDamageLogs] = useState([]);
  const [enemyMessage, setEnemyMessage] = useState('');
  const [enemyLines, setEnemyLines] = useState([
    "Name a time you failed in life!",
    "Prepare to be coded out!",
    "I'm the master coder!",
    "Tell me about your salary expectations.",
    "What are some of your weaknesses",
  ]);

  const { charName } = useCharacter();

  const getRandomEnemyLine = () => {
    const randomIndex = Math.floor(Math.random() * enemyLines.length);
    return enemyLines[randomIndex];
  };

  const handleAttack = () => {
    const charismaDamage = Math.floor(Math.random() * (15 - 5 + 1) + 5);

    // Your attack
    setTarget2Charisma(target2Charisma - charismaDamage);

    // Add the damage log to the logs state
    setDamageLogs(prevLogs => [
      ...prevLogs,
      `You attacked Coding Enemy for ${charismaDamage} charisma damage.`,
    ]);

    // Enemy's attack
    const enemyCharismaDamage = Math.floor(Math.random() * (15 - 5 + 1) + 5);
    setTarget1Charisma(target1Charisma - enemyCharismaDamage);

    const enemyLine = getRandomEnemyLine();
    setEnemyMessage(`Coding Enemy: "${enemyLine}"`);

    // Add the enemy message and damage log to the logs state
    setDamageLogs(prevLogs => [
      ...prevLogs,
      `Coding Enemy attacked you for ${enemyCharismaDamage} charisma damage.`,
    ]);
  };

  return (
    <div>
      <h1>CODING BATTLE</h1>
      <div className="box">
        <div className="target-box">
          <h2>{charName}</h2>
          <p>Charisma: {target1Charisma}</p>
        </div>
        <div className="target-box">
          <h2>CODING ENEMY</h2>
          <p>Charisma: {target2Charisma}</p>
        </div>
      </div>
      <button onClick={handleAttack}>Attack</button>
      <p>It's your turn to attack</p>
      <div className="enemy-message-box">
        {enemyMessage && <p>{enemyMessage}</p>}
      </div>
      <div className="damage-info-box">
        {damageLogs.map((log, index) => (
          <p key={index}>{log}</p>
        ))}
      </div>
    </div>
  );
};

export default Battle;

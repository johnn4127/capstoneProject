import React, { useState, useEffect } from 'react';
import { useCharacter } from './CharacterContext';

const Battle = () => {
  const [target1Charisma, setTarget1Charisma] = useState(100);
  const [target2Charisma, setTarget2Charisma] = useState(100);
  const [damageInfo, setDamageInfo] = useState('');
  const { charName } = useCharacter(); 

  const handleAttack = () => {
    const charismaDamage = Math.floor(Math.random() * (15 - 5 + 1) + 5);

    // Your attack
    setTarget2Charisma(target2Charisma - charismaDamage);
    setDamageInfo(`You attacked Coding Enemy for ${charismaDamage} charisma damage.`);

    // Enemy's attack
    const enemyCharismaDamage = Math.floor(Math.random() * (15 - 5 + 1) + 5);
    setTarget1Charisma(target1Charisma - enemyCharismaDamage);
    setDamageInfo(prevDamageInfo => `${prevDamageInfo}\nCoding Enemy attacked you for ${enemyCharismaDamage} charisma damage.`);
  };

  return (
    <div>
      <h1>CODING BATTLE</h1>
      <div className="target">
        <h2>{charName}</h2>
        <p>Charisma: {target1Charisma}</p>
      </div>
      <div className="target">
        <h2>CODING ENEMY</h2>
        <p>Charisma: {target2Charisma}</p>
      </div>
      <button onClick={handleAttack}>Attack</button>
      <p>It's your turn to attack</p>

      {damageInfo && (
        <div className="damage-info-box">
          <p>{damageInfo}</p>
        </div>
      )}
    </div>
  );
};

export default Battle;

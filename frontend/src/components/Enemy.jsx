import React, { useEffect, useContext, useState } from 'react';
import { PositionData, PlayerData } from './Game';;
import enemy1 from '../assets/images/bossenemy.png'
import EnemyTextBox from './EnemyTextBox';

const Enemy = ({ index }) => {

  const { battle, setBattle } = useContext(PlayerData)
  const { enemyPositions, setEnemyPositions, setPlayerPosition } = useContext(PositionData);
  const enemyMessage = 'GET HIM BOYS!!!!'; // Replace with your enemy's message

  const [enemyPosition, setEnemyPosition] = useState(enemyPositions[index]); // initialize state with the enemy's position

  const { x, y } = enemyPosition;

const handlePlayerAdvance = () => {
  setPlayerPosition({...enemyPositions[index]})
  setBattle(true)
}

  return (
    <>
      {!enemyPositions[index].defeated ? (
    <button onClick={handlePlayerAdvance} style={{
      border: 'none',
      background: 'none'
    }}>
        <div
        className='enemy'
        style={{
          position: 'absolute',
          left: x,
          bottom: y,
          width: '100px',
          height: '100px',
          color: 'aliceblue'
        }}
        ><EnemyTextBox message={enemyMessage} />
             <p>Enemy {index + 1}<img style={{height:"100px"}}  src={enemy1}/> </p> {/* Once all images for enemies are found, replace src with 'enemies[index].img'.*/}
          </div>
      </button>
      ) : null}
      </>
  );
};

export default Enemy;

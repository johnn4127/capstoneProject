import React, { useEffect, useContext, useState } from 'react';
import { PositionData, PlayerData } from './Game';;
import enemy1 from '../assets/images/bossenemy.png'
import enemy2 from '../assets/images/enemy2.gif'
import EnemyTextBox from './EnemyTextBox';

const Enemy = ({ index }) => {

  const { battle, setBattle } = useContext(PlayerData)
  const { enemyPositions, setEnemyPositions, setPlayerPosition } = useContext(PositionData);
  const enemyMessage = 'GET HIM BOYS!!!!'; 

  const [enemyPosition, setEnemyPosition] = useState(enemyPositions[index]); 

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
    }}
    disabled={!enemyPositions[index].active}>
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
             <p>Enemy {index + 1}<img style={{height:"100px"}}  src={enemyPositions[index].img}/> </p> 
          </div>
      </button>
      ) : null}
      </>
  );
};

export default Enemy;

import React, { useContext, useState } from 'react';

//Context imports
import { PositionData, PlayerData } from './Game';

//Component imports
import EnemyTextBox from './EnemyTextBox';

import BossEnemy from '../assets/images/Boss.gif'

const Enemy = ({ index }) => {

  //Contexts
  const { setBattle } = useContext(PlayerData)
  const { enemyPositions, setPlayerPosition } = useContext(PositionData);
  const enemyMessage = 'GET HIM BOYS!!!!';

  //States
  const [enemyPosition, setEnemyPosition] = useState(enemyPositions[index]);

  const { x, y, height, width  } = enemyPosition;

  const handlePlayerAdvance = () => {
    setPlayerPosition({ ...enemyPositions[index] })
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
              width: width,
              height: height,
              color: 'aliceblue'
            }}
          ><EnemyTextBox message={enemyMessage} />
            <p>Enemy {index + 1} <img style={enemyPositions[index].img == BossEnemy ? { height: height, transform: 'scaleX(-1)'} : { height: height}} src={enemyPositions[index].img} /> </p>
          </div>
        </button>
      ) : null}
    </>
  );
};

export default Enemy;

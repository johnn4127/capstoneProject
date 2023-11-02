import React, { useEffect, useContext, useState } from 'react';
import { PositionData } from './Playarea';
import enemy1 from '../assets/images/bossenemy.png'
const Enemy = ({ index }) => {
  const { enemyPositions, setEnemyPositions } = useContext(PositionData);
  const stepSize = 30;

  const [enemyPosition, setEnemyPosition] = useState(enemyPositions[index]); // initialize state with the enemy's position

  const handleKeyPress = (event) => {
    const { x } = enemyPosition; // sets x to the x key of enemyPosition

    switch (event.key) {
      case 'a':
        if (x) {
          setEnemyPosition({ ...enemyPosition, x: x + stepSize });
        }
        break;
      case 'd':
        if (x - stepSize >= 0) {
          setEnemyPosition({ ...enemyPosition, x: x - stepSize });
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress); 

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [enemyPosition]);

  
  useEffect(() => { // updates the original enemyPosition with the updated enemy position
    setEnemyPositions((prevPositions) => {
      return prevPositions.map((position, i) => {
        if (i === index) {
          return enemyPosition;
        }
        return position;
      });
    });
  }, [enemyPosition, index, setEnemyPositions]);

  const { x, y } = enemyPosition;

  return (
    <div
      className='enemy'
      style={{
        position: 'absolute',
        left: x,
        bottom: y,
        width: '100px',
        height: '30px',
      }}
    >
      <p>Enemy <img style={{height:"100px"}}  src={enemy1}/> {index + 1}</p>
    </div>
  );
};

export default Enemy;

import React, { useState, createContext} from 'react'
import Background from './Background'
import Player from './Player'
import '../../stylesheets/Game.css'
import Enemy from './Enemy'
import Boss from './Boss'

export const  PositionData = createContext()

const Playarea = () => {
const [playerPosition, setPlayerPosition] = useState({ x: 0, y: -350 })
const [enemyPosition, setEnemyPosition] = useState({ x: 400, y: 120 })
const [bossPosition, setBossPosition] = useState({ x: 1200, y: -600 })

const checkCollision = (component1, component2) => {
  const playerLeft = playerPosition.x;
  const playerRight = playerPosition.x + playerWidth;
  const playerTop = playerPosition.y;
  const playerBottom = playerPosition.y + playerHeight;

  const enemyLeft = enemyPosition.x;
  const enemyRight = enemyPosition.x + enemyWidth;
  const enemyTop = enemyPosition.y;
  const enemyBottom = enemyPosition.y + enemyHeight;

  if(
    playerRight > enemyLeft && 
    playerLeft < enemyRight &&
    playerBottom > enemyTop &&
    playerTop < enemyBottom
  ) {
    console.log('Collision detected')
  }

  
}


  return (

    <div id='playArea'>
      <div id='canvas'
        style={{
          position: 'relative',
          width: '80vw',
          height: '70vh',
          overflow: 'hidden',
          backgroundColor: 'darkgray'
        }}>
        <Background />
        <PositionData.Provider value={{playerPosition, setPlayerPosition, enemyPosition, setEnemyPosition, bossPosition, setBossPosition}}>
        <Player />
        <Boss />
        <Enemy />
        </PositionData.Provider>
      </div>
    </div>
  )
}

export default Playarea
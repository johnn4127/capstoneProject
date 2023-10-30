import React, { useState, createContext, useEffect} from 'react'
import Background from './Background'
import Player from './Player'
import '../../stylesheets/Game.css'
import Enemy from './Enemy'
import Boss from './Boss'

export const  PositionData = createContext()

const Playarea = () => {
const [playerPosition, setPlayerPosition] = useState({ x: 0, y: -350, width: 100 }) //sets initial position of player avatar
const [enemyPosition, setEnemyPosition] = useState({ x: 400, y: 120, width: 100 }) //sets initial position of player avatar
const [bossPosition, setBossPosition] = useState({ x: 1200, y: -600, width: 300 }) //sets initial position of player avatar

const [battle, setBattle] = useState(true)

const checkCollision = () => {
  const playerLeft = playerPosition.x;
  const playerRight = playerPosition.x + playerPosition.width;
  

  const enemyLeft = enemyPosition.x;
  const enemyRight = enemyPosition.x + enemyPosition.width;

  const bossLeft = bossPosition.x;
  const bossRight = bossPosition.x + bossPosition.width;
  
  if(
    playerRight > enemyLeft && 
    playerLeft < enemyRight 
  ) {
    console.log('Collision detected')
  } 
  console.log(
    typeof(playerPosition.width),
    playerPosition.width
  )
}

useEffect(() => {
  document.addEventListener('keydown', (event) => {

    checkCollision();
  })

},[playerPosition, enemyPosition])


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
        <PositionData.Provider value={{playerPosition, setPlayerPosition, enemyPosition, setEnemyPosition, bossPosition, setBossPosition}}>
        {!battle ? (
          <>
          <Background />
          <Player />
          <Boss />
          <Enemy />
          </>
          ) : (
            <>
            </>
          )
        }
        </PositionData.Provider>
      </div>
    </div>
  )
}

export default Playarea
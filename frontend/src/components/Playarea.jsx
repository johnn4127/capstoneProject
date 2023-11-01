import React, { useState, createContext, useContext, useEffect } from 'react'
import Background from './Background'
import Player from './Player'
import '../stylesheets/Game.css'
import Enemy from './Enemy'
import Boss from './Boss'
import { PlayerData } from './Game'
import Shop from './Shop.jsx'
import Battle from './Battle'

export const PositionData = createContext()

const Playarea = () => {
  
  const { player, setPlayer, battle, setBattle, shop, setShop } = useContext(PlayerData)
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: -350, width: 100 }) //sets initial position of player avatar

  const [enemyPositions, setEnemyPositions] = useState([ //sets the position data for different enemies
    { x: 400, y: 365, width: 100 },
    { x: 800, y: 365, width: 100 },
    { x: 1200, y: 365, width: 100 },
  ]);

  const [bossPosition, setBossPosition] = useState({ x: 1600, y: -600, width: 300 }) //sets initial position of player avatar

  const [firstEnemyDefeated, setFirstEnemyDefeated] = useState(false)
  const [secondEnemyDefeated, setSecondEnemyDefeated] = useState(false)
  const [thirdEnemyDefeated, setThirdEnemyDefeated] = useState(false)

  
  const checkCollision = () => {
    const playerLeft = playerPosition.x; // Left side of the player div
    const playerRight = playerPosition.x + playerPosition.width; // Right side of the player div
  
    
    enemyPositions.forEach((enemyPos, index) => { //checks the size of each enemy div
      const enemyLeft = enemyPos.x; // Left side of the enemy div
      const enemyRight = enemyPos.x + enemyPos.width; // Right side of the enemy div
  
      
      if (playerRight > enemyLeft && playerLeft < enemyRight) { //checks whether or not play is interesecting with any enemies
        console.log(`Collision detected with Enemy ${index + 1}`);
        setBattle(true);
      }
    });
  };

  const endBattle = () => { //used to undrender battle component and render shop componnent. Should later be moved to battle component during testing.
    if (!firstEnemyDefeated) {
      setFirstEnemyDefeated(true)
      setBattle(false)
      setShop(true)
    }
    else if (firstEnemyDefeated && !secondEnemyDefeated) {
      setSecondEnemyDefeated(true)
      setBattle(false)
      setShop(true)
    } else if (firstEnemyDefeated && secondEnemyDefeated && !thirdEnemyDefeated) {
      setThirdEnemyDefeated(true)
      setBattle(false)
      setShop(true)
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      checkCollision();
    })

  }, [playerPosition, enemyPositions])


  return (
    <div id='playArea'>
      <div id='canvas'
        style={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          backgroundColor: 'darkgray'
        }}>
        <PositionData.Provider value={{ playerPosition, setPlayerPosition, enemyPositions, setEnemyPositions, bossPosition, setBossPosition }}>
          {!battle && !shop ? ( //if shop and battle are false render this
            <>
              <Background />
              <Player />
              <Boss />
              {enemyPositions.map((enemyPosition, index) => (
                <Enemy key={index} index={index} />
              ))}

            </>
              ) : null}
          {battle ? ( //if battle is true render this
            <>
              <Battle />
              <button onClick={() => endBattle()}>End Battle</button>
            </>
          ) : null
          }
          {shop ? ( //if shop is true render this
            <>
              <Shop />
            </>
          ) : null}
        </PositionData.Provider>
      </div>
    </div>
  )
}
export default Playarea
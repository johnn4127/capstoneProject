import React, { useState, createContext, useContext, useEffect } from 'react'
import Background from './Background'
import Player from './Player'
import '../../stylesheets/Game.css'
import Enemy from './Enemy'
import Boss from './Boss'
import { PlayerData } from './Game'
import Shop from './Shop.jsx'
import Battle from '../Battle'




export const PositionData = createContext()

const Playarea = () => {

  const { player, setPlayer, battle, setBattle, shop, setShop } = useContext(PlayerData)

  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: -350, width: 100 }) //sets initial position of player avatar
  const [enemyPosition, setEnemyPosition] = useState({ x: 400, y: 120, width: 100 }) //sets initial position of player avatar
  const [bossPosition, setBossPosition] = useState({ x: 1200, y: -600, width: 300 }) //sets initial position of player avatar

  

  const checkCollision = () => {
    const playerLeft = playerPosition.x; //sets the left side of the player div
    const playerRight = playerPosition.x + playerPosition.width; //sets the right side of the player div


    const enemyLeft = enemyPosition.x; //sets the left side of the enemy div
    const enemyRight = enemyPosition.x + enemyPosition.width; //sets the right side of the enemy div

    const bossLeft = bossPosition.x; //sets the left side of the boss div
    const bossRight = bossPosition.x + bossPosition.width; //sets the right side of the boss div

    if ( //checks to see if divs intersect
      playerRight > enemyLeft &&
      playerLeft < enemyRight 
    ) {
      console.log('Collision detected')
      setBattle(true)
    }
  }

  const endBattle = () => { //used to undrender battle component and render shop componnent. Should later be moved to battle component during testing.
    setBattle(false)
    setShop(true)
  }

  useEffect(() => {
    document.addEventListener('keydown', (event) => {

      checkCollision();
    })

  }, [playerPosition, enemyPosition])


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
        <PositionData.Provider value={{ playerPosition, setPlayerPosition, enemyPosition, setEnemyPosition, bossPosition, setBossPosition }}>
          {!battle && !shop ? ( //if shop and battle are false render this
            <>
              <Background />
              <Player />
              <Boss />
                <Enemy />
            </>
          ) : null}

          {battle ? ( //if battle is true render this
            <>
            <Battle/>
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
import React, { useState, createContext, useContext, useEffect } from 'react'
import Background from './Background'
import Player from './Player'
import '../stylesheets/Game.css'
import Enemy from './Enemy'
import Boss from './Boss'
import { PlayerData, PositionData } from './Game'
import Shop from './Shop.jsx'
import Battle from './Battle'
import { usePicture } from './PictureContext';



const Playarea = () => {

  const { selectedPicture } = usePicture();
  
  const { player, setPlayer, battle, setBattle, shop, setShop } = useContext(PlayerData)
  
  const { playerPosition, enemyPositions, statIndex, setStatIndex } = useContext(PositionData)


  const checkCollision = () => {
    const playerLeft = playerPosition.x; // Left side of the player div
    const playerRight = playerPosition.x + playerPosition.width; // Right side of the player div

    const enemyLeft = enemyPositions[statIndex].x; // Left side of the enemy div
    const enemyRight = enemyPositions[statIndex].x + enemyPositions[statIndex].width; // Right side of the enemy div
    
    
    if (playerRight > enemyLeft) { //checks whether or not play is interesecting with any enemies
      //console.log(`enemLeft: ${enemyLeft}, enemyRight: ${enemyRight}`)
      console.log("Index at start of battle: ", statIndex);
      setBattle(true);
    }

    // enemyPositions.forEach((enemyPos, index) => { //checks the size of each enemy div
    //   const enemyLeft = enemyPos.x; // Left side of the enemy div
    //   const enemyRight = enemyPos.x + enemyPos.width; // Right side of the enemy div


    //   if (playerRight > enemyLeft && playerLeft < enemyRight) { //checks whether or not play is interesecting with any enemies
    //     console.log(`Collision detected with Enemy ${index + 1}`);
    //     setBattle(true);
    //   }
    // });
  };



  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      checkCollision();
    })

  }, [playerPosition, enemyPositions, statIndex])


  return (
    <div id='playArea'>
      <div id='canvas'
        style={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          // backgroundImage:`url(${battlescreen})`
        }}>

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
              <Battle enemyIndex={statIndex} />
            </>
          ) : null
          }

          {shop ? ( //if shop is true render this
            <>
              <Shop />
            </>
          ) : null}
      </div>
    </div>
  )
}
export default Playarea
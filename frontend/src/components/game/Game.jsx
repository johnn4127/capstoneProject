import React, { useState, createContext } from 'react'
import Playarea from './Playarea'


export const PlayerData = createContext()

const Game = () => {

  const [player, setPlayer] = useState({proficiency: 15, confidence: 200, maxConfidence: 200, skills: [], exp: 0})
  const [battle, setBattle] = useState(false) //controls rendering of battle component
  const [shop, setShop] = useState(false) //controls rendering of shop component

  const {enemy1, setEnemy1} = useState({proficiency: 10, confidence: 100, maxConfidence: 100, exp: 100})
  const {enemy2, setEnemy2} = useState({proficiency: 12, confidence: 200, maxConfidence: 200, exp: 300})
  const {enemy3, setEnemy3} = useState({proficiency: 15, confidence: 350, maxConfidence: 350, exp: 100})
  const {boss, setBoss} = useState({proficiency: 20, confidence: 500, maxConfidence: 500, exp: 1000})
  
  return (
    <> 
    <PlayerData.Provider value={{player, setPlayer, battle, setBattle, shop, setShop}} > 
       <Playarea />
    </PlayerData.Provider>
    </>
  )
}

export default Game
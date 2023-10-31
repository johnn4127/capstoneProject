import React, { useState, createContext } from 'react'
import Playarea from './Playarea'


export const PlayerData = createContext()

const Game = () => {

  const [player, setPlayer] = useState({proficiency: 10, confidence: 100, maxConfidence: 100, skills: [], exp: 1000})
  const [battle, setBattle] = useState(false) //controls rendering of battle component
  const [shop, setShop] = useState(false) //controls rendering of shop component
  
  return (
    <> 
    <PlayerData.Provider value={{player, setPlayer, battle, setBattle, shop, setShop}} > 
       <Playarea />
    </PlayerData.Provider>
    </>
  )
}

export default Game
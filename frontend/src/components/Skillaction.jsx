import React, { useContext } from 'react'

//Context imports
import { PlayerData } from './Game'
import { BattleContext } from './Battle'

const Skillaction = () => {

  //Contexts
  const { player, setPlayer } = useContext(PlayerData)
  const { setHidden } = useContext(BattleContext)
//hello hello
  return (
    <div>
        {player.skills.map((skill, index) => (
          <button key={index} onClick={() => {skill.effect(); setHidden(true)}}>{skill.name}</button>
        ))}
    </div>
  )
}

export default Skillaction
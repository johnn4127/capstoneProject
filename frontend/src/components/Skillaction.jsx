import React, { useContext } from 'react'
import { PlayerData } from './Game'
import { BattleContext } from './Battle'

const Skillaction = () => {

  const { player, setPlayer } = useContext(PlayerData)
  const { setHidden } = useContext(BattleContext)

  return (
    <div>
        {player.skills.map((skill, index) => (
          <button key={index} onClick={() => {skill.effect(); setHidden(true)}}>{skill.name}</button>
        ))}


    </div>
  )
}

export default Skillaction
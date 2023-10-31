import React, { useContext } from 'react'
import { PlayerData } from './game/Game'
import { BattleContext } from './Battle'

const Skillaction = () => {

  const { player, setPlayer } = useContext(PlayerData)
  const { setHidden } = useContext(BattleContext)

  return (
    <div>
        {player.skills.map((skill, index) => (
          <button key={index} onClick={skill.effect}>{skill.name}</button>
        ))}


    </div>
  )
}

export default Skillaction
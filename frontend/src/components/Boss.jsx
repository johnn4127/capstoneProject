import React, { useContext } from 'react'

//Context import
import { PositionData } from './Game';

//Style imports
import '../stylesheets/Battle.css'

const Boss = () => {

  const { bossPosition, setBossPosition, enemyPositions } = useContext(PositionData)

  const { x, y } = bossPosition

  const handleBossFight = () => {
    setPlayerPosition({ ...bossPosition })
    setBattle(true)
  }

  return (
    <button onClick={handleBossFight} style={{
      border: 'none',
      background: 'none'
    }}
    disabled={!enemyPositions[enemyPositions.length-1].defeated}>
      <div id='Boss'
        style={{
          position: 'absolute',
          left: x,
          bottom: y,
          width: '450px',
          height: '450px',
        }}>
        <div  >
          <img className='bossenemypic' src={bossPosition.img} style={{ transform: 'scaleX(-1)' }} /></div>
      </div>
    </button>
  )
}

export default Boss
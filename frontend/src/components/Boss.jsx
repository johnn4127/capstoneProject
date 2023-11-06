import React, { useContext } from 'react'

//Context import
import { PositionData } from './Game';

//Style imports
import '../stylesheets/Battle.css'

const Boss = () => {

  const { bossPosition, setBossPosition } = useContext(PositionData)

  const { x, y } = bossPosition

  return (
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
  )
}

export default Boss
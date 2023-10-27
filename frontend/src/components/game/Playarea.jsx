import React from 'react'
import Background from './Background'
import '../../stylesheets/Game.css'

const Playarea = () => {
  return (
    <div id='playArea'
    style={{
        position: 'relative',
        width: 'screenwidth',
        height: '50vh',
        overflow: 'hidden'
    }}>
        <Background />
    </div>
  )
}

export default Playarea
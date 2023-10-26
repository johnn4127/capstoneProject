import React from 'react'
import Background from './Background'
import Player from './Player'
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
        {/* <Player /> */}
    </div>
  )
}

export default Playarea
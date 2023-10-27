import React from 'react'
import Background from './Background'
import Player from './Player'
import '../../stylesheets/Game.css'
import Enemy from './Enemy'
import Boss from './Boss'

const Playarea = () => {


  return (

    <div id='playArea'>
      <div id='canvas'
        style={{
          position: 'relative',
          width: '80vw',
          height: '70vh',
          overflow: 'hidden',
          backgroundColor: 'darkgray'
        }}>
        <Background />
        <Player />
        <Boss />
        <Enemy />
      </div>
    </div>
  )
}

export default Playarea
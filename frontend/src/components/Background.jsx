import React, { useState } from 'react'

//Style imports
import '../stylesheets/Game.css'

//Asset imports
import background from '../assets/images/playarea.jpeg'

const Background = () => {

  const [position, setPosition] = useState({ x: 0 })

  const { x, y } = position //creates variables to represent the x and y values of 'position' state

  return (
    <div id='background'
      style={{
        position: 'absolute',
        left: x,
        top: y,
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'repeat-x',
        overflow: 'visible',
        backgroundSize: 'cover'
      }}>
    </div>
  )
}

export default Background
import React, { useState, useEffect } from 'react'
import '../stylesheets/Game.css'


import background from '../assets/images/playarea.jpeg'

const Background = () => {

    const backgroundUrl = 'https://cdnb.artstation.com/p/assets/images/images/024/841/051/original/mengo-fedorov-forest-snow-parallax.gif?1583715257'

    const [position, setPosition] = useState({ x: 0})

    const { x, y } = position


  return (
    <div id='background'
    style={{
        position: 'absolute',
        left: x,
        top: y,
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'repeat-x', //set background image to repeat on the x-axis
        overflow: 'visible',
        backgroundSize: 'cover'
    }}>
    </div>
  )
}

export default Background
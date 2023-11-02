import React, {useState, useEffect } from 'react'
import '../stylesheets/Game.css'
import Player from './Player'
import background from '../assets/images/background2.gif'
const Background = () => {

    const backgroundUrl = 'https://cdnb.artstation.com/p/assets/images/images/024/841/051/original/mengo-fedorov-forest-snow-parallax.gif?1583715257'

    const [position, setPosition] = useState({ x: 0})
    const stepSize = 20;

    const handleKeyPress = (event) => {
        const { x, y } = position;

        if (position.y < 0){
            setPosition({y:0})
        }
        switch (event.key) {
            case 'a':
                setPosition({ x: x + stepSize})
                break;
            case 'd':
                setPosition({ x: x - stepSize})
                break;
            default: break
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress)

        return () => {
            document.removeEventListener('keydown', handleKeyPress)}
    }, [position])

    const { x, y } = position


  return (
    <div id='background'
    style={{
        position: 'absolute',
        left: x,
        top: y,
        height: '80vh',
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
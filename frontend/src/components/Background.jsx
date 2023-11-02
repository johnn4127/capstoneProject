import React, { useState, useEffect } from 'react'
import '../stylesheets/Game.css'


const Background = () => {

    const backgroundUrl = 'https://i.pinimg.com/originals/9c/3a/f7/9c3af7361bf5d65d3b1fd84a73c750f4.png'

    const [position, setPosition] = useState({ x: 0})
    const stepSize = 20;

    const handleKeyPress = (event) => {
        const { x, y } = position;

        if (position.y < 0){
            setPosition({ y: 0 })
        }
        switch (event.key) {
            case 'a':
                setPosition({ x: x + stepSize })
                break;
            case 'd':
                setPosition({ x: x - stepSize })
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
        height: '70vh',
        width: '300vh',
        backgroundImage: `url('https://i.pinimg.com/originals/9c/3a/f7/9c3af7361bf5d65d3b1fd84a73c750f4.png')`,
        backgroundRepeat: 'repeat-x', //set background image to repeat on the x-axis
        overflow: 'visible'
    }}>
    </div>
  )
}

export default Background
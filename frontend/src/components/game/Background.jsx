import React, {useState, useEffect } from 'react'
import '../../stylesheets/Game.css'
import Player from './Player'

const Background = () => {

    const backgroundUrl = 'https://i.pinimg.com/originals/9c/3a/f7/9c3af7361bf5d65d3b1fd84a73c750f4.png'

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

    const checkCollision = (component1, component2) => {
        return (
            component1.x < component2.x + component2.width &&
            component1.x + component1.width > component2.x && 
            component1.y < component2.y + component2.height &&
            component1.y + component1.height > component2.y
            )
    }

  return (
    <div id='background'
    style={{
        position: 'relative',
        left: x,
        top: y,
        height: '96%',
        backgroundImage: `url('https://i.pinimg.com/originals/9c/3a/f7/9c3af7361bf5d65d3b1fd84a73c750f4.png')`,
        backgroundRepeat: 'repeat-x',
        overflow: 'hidden',
        
    }}>
        <Player />
    </div>
  )
}

export default Background
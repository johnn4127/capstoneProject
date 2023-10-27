import React, { useState, useEffect } from 'react'

const Enemy = () => {
    const [position, setPosition] = useState({ x: 400, y: 120 }) //sets initial position of player avatar
    const stepSize = 30; //controls how far player avatar moves 
    

    const handleKeyPress = (event) => { //function to allow player avatar to move upon key press
        const { x, y } = position;

        switch (event.key) {
            case 'a':
                    setPosition({ x: x + stepSize, y }) //if 'a' key is pressed player avatar moves left
                break;
            case 'd':
                    setPosition({ x: x - stepSize, y }) //if 'd' key is pressed player avatar moves right
                break;
            default: break //stops character movement if nothing is pressed
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress) //adds 'keydown' event listenr on component render and assigns it the handleKeyPress function

        return () => {
            document.removeEventListener('keydown', handleKeyPress)}
    }, [position])

    const { x, y } = position //sets variables x and y to equal position.x and position.y respectively

  return (
    <div className='enemy' 
    style={{
        position: 'sticky',
        left: x, 
        bottom: y,
        width: '100px',
        height: '100px',
        background: 'red'
    }}>
        <p>Enemy</p>
    </div>
  )
}

export default Enemy
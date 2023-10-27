import React, { useState, useEffect } from 'react'

const Player = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 }) //sets initial position of player avatar
    const stepSize = 30; //controls how far player avatar moves 

    const handleKeyPress = (event) => { //function to allow player avatar to move upon key press
        const { x, y } = position;

        if(position.x < 0){
            setPosition({ x: 0, y})
        }

        switch (event.key) {
            case 'a':
                setPosition({ x: x - stepSize, y }) //if 'a' key is pressed player avatar moves left
                break;
            case 'd':
                setPosition({ x: x + stepSize, y }) //if 'd' key is pressed player avatar moves right
                break;
            case 'w':
                setPosition({ x, y: y - stepSize }) //if 'w' key is pressed player avatar moves up
                break;
            case 's':
                setPosition({ x, y: y + stepSize }) //if 's' key is pressed player avatar moves down
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
        <div style={{
            position: 'relative',
            left: x, 
            top: y,
            width: '50px',
            height: '50px',
            background: 'green'
        }}>
            <p>Player</p>
        </div>
    )
}

export default Player
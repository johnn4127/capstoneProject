import React, { useState, useEffect, useContext } from 'react'
import { PositionData } from './Playarea';

const Player = () => {
    const {playerPosition, setPlayerPosition } = useContext(PositionData) //sets initial position of player avatar
    const stepSize = 30; //controls how far player avatar moves 
    

    const handleKeyPress = (event) => { //function to allow player avatar to move upon key press
        const { x, y } = playerPosition;
        const maxX = 840;
        const maxY = 10000;

        switch (event.key) {
            case 'a':
                if(x - stepSize >= 0){ // checks whether player is within bounds of background
                    setPlayerPosition({ x: x - stepSize, y }) //if 'a' key is pressed player avatar moves left
                }
                break;
            case 'd':
                if(x + stepSize <= maxX){
                    setPlayerPosition({ x: x + stepSize, y }) //if 'd' key is pressed player avatar moves right
                }
                break;
            case 'w':
                if(y + stepSize <= maxY){
                    setPlayerPosition({ x, y: y + stepSize }) //if 'w' key is pressed player avatar moves up
                }
                break;
            case 's':
                if(y - stepSize <= 0)
                setPlayerPosition({ x, y: y - stepSize }) //if 's' key is pressed player avatar moves down
                break;
            default: break //stops character movement if nothing is pressed
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress) //adds 'keydown' event listener on component render and assigns it the handleKeyPress function

        return () => {
            document.removeEventListener('keydown', handleKeyPress)}
    }, [playerPosition])

    const { x, y } = playerPosition //sets variables x and y to equal position.x and position.y respectively

    return (
        <div id='player' style={{
            position: 'relative',
            left: x, 
            bottom: y,
            width: '100px',
            height: '100px',
            background: 'green',
            zIndex: 2
        }}>
            <p>Player</p>
        </div>
    )
}

export default Player
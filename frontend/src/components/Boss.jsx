import React, { useState, useEffect, useContext } from 'react'
import { PositionData } from './Playarea';

const Boss = () => {

    const { bossPosition, setBossPosition } = useContext(PositionData) 
    const stepSize = 30; //controls how far player avatar moves 
    

    const handleKeyPress = (event) => { //function that handles distance between boss and players
        const { x, y, width } = bossPosition;

        switch (event.key) {
            case 'a':
                    setBossPosition({ x: x + stepSize, y, width }) //if 'a' key is pressed boss moves further from player
                break;
            case 'd':
                    setBossPosition({ x: x - stepSize, y, width }) //if 'd' key is pressed boss moves closer to player
                break;
            default: break //stops boss movement if nothing is pressed
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress) //adds 'keydown' event listenr on component render and assigns it the handleKeyPress function

        return () => {
            document.removeEventListener('keydown', handleKeyPress)}
    }, [bossPosition])

    const { x, y } = bossPosition //sets variables x and y to equal position.x and position.y respectively

  return (
    <div id='Boss' 
    style={{
        position: 'sticky',
        left: x, 
        bottom: y,
        width: '300px',
        height: '350px',
        background: 'purple'
    }}>
        <p>Boss</p>
    </div>
  )
}

export default Boss
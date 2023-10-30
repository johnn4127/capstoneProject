import React, { useState, useEffect, useContext } from 'react'
import { PositionData } from './Playarea';

const Enemy = () => {
    const { enemyPosition, setEnemyPosition } = useContext(PositionData) 
    const stepSize = 30; //controls how far player avatar moves 
    

    const handleKeyPress = (event) => { //function that handles distance between enemy and player 
        const { x, y, width } = enemyPosition;

        switch (event.key) {
            case 'a':
                    setEnemyPosition({ x: x + stepSize, y, width }) //if 'a' key is pressed enemy avatar moves right
                break;
            case 'd':
                    setEnemyPosition({ x: x - stepSize, y, width }) //if 'd' key is pressed enemy avatar moves left
                break;
            default: break //stops enemy movement if nothing is pressed
        }
    }

    

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress) //adds 'keydown' event listenr on component render and assigns it the handleKeyPress function

        return () => {
            document.removeEventListener('keydown', handleKeyPress)}
    }, [enemyPosition])

    const { x, y } = enemyPosition //sets variables x and y to equal position.x and position.y respectively

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
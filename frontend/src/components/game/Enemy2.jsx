import React, { useState, useEffect, useContext } from 'react'
import { PositionData } from './Playarea';

const Enemy2 = () => {
    const { enemy2, setEnemy2 } = useState({ proficiency: 12, confidence: 200, maxConfidence: 200, exp: 300, defeated: false })

    const { enemy2Position, setEnemy2Position } = useContext(PositionData)
    const stepSize = 30; //controls how far player avatar moves 

    const handleKeyPress = (event) => { //function that handles distance between enemy and player 
        const { x, y, width } = enemy2Position;

        switch (event.key) {
            case 'a':
                setEnemy2Position({ x: x + stepSize, y, width }) //if 'a' key is pressed enemy avatar moves right
                break;
            case 'd':
                setEnemy2Position({ x: x - stepSize, y, width }) //if 'd' key is pressed enemy avatar moves left
                break;
            default: break //stops enemy movement if nothing is pressed
        }
    }

    const { x, y } = enemy2Position //sets variables x and y to equal position.x and position.y respectively
    return (
        <>
                <div className='enemy'
                    style={{
                        position: 'sticky',
                        left: x,
                        bottom: y,
                        width: '100px',
                        height: '100px',
                        background: 'red'
                    }}>
                    <p>Enemy2</p>
                </div>
        </>

    )
}

export default Enemy2
import React, { useState, useEffect } from 'react'

const Player = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const stepSize = 30;

    const handleKeyPress = (event) => {
        const { x, y } = position;

        if(position.x < 0){
            setPosition({ x: 0, y})
        }

        switch (event.key) {
            case 'a':
                setPosition({ x: x - stepSize, y })
                break;
            case 'd':
                setPosition({ x: x + stepSize, y })
                break;
            case 'w':
                setPosition({ x, y: y - stepSize })
                break;
            case 's':
                setPosition({ x, y: y + stepSize })
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
import React, { useState, useEffect, useContext } from 'react'
import { PositionData } from './Game';
import BossEnemy from '../assets/images/Boss.gif'
import '../stylesheets/Battle.css'
const Boss = () => {

    const { bossPosition, setBossPosition } = useContext(PositionData) 
   
    const { x, y } = bossPosition //sets variables x and y to equal position.x and position.y respectively

  return (
    <div id='Boss' 
    style={{
        position: 'absolute',
        left: x, 
        bottom: y,
        width: '450px',
        height: '450px',
        
    }}>
        <div  >
        <img className='bossenemypic' src={bossPosition.img} style={{transform: 'scaleX(-1)'}}/></div>
    </div>
  )
}

export default Boss
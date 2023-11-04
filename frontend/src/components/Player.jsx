import React, { useState, useEffect, useContext } from 'react'
import { PositionData } from './Game';
import { useCharacter } from './CharacterContext';
import { useSelectedChar } from './SelectedCharContext';
import { usePicture } from './PictureContext'; 
 
const Player = () => {
    const { charName } = useCharacter();
    const {selectedchar} = useSelectedChar();
    const {selectedPicture} = usePicture();
    console.log(charName)
    console.log({selectedchar})
    
    const { playerPosition, setPlayerPosition } = useContext(PositionData) 

    const { x, y } = playerPosition //sets variables x and y to equal position.x and position.y respectively

    return (
        <div id='player' style={{
            position: 'absolute',
            left: x, 
            bottom: y,
            height: '70px',
            width: '100px',
            //background: 'green',
            zIndex: 2 //ensures that player is always visible above other elements
        }}>
            
          <p  style={{zIndex:1000}} className='playcharactername' >{charName}</p>
          
        <img className='playcharacter' src={selectedPicture} alt="Selected Character" />        
        </div>
    )
}

export default Player
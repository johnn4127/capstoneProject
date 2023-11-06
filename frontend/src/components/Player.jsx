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

    const { x, y } = playerPosition 
    return (
        <div id='player' style={{
            position: 'absolute',
            left: x, 
            bottom: y,
            height: '70px',
            width: '100px',
            //background: 'green',
            zIndex: 2 
        }}>
            
          <p  style={{zIndex:1000}} className='playcharactername' >{charName}</p>
          
        <img className='playcharacter' src={selectedPicture} alt="Selected Character" />        
        </div>
    )
}

export default Player
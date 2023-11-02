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
    const stepSize = 20; //controls how far player avatar moves 
    
    const handleKeyPress = (event) => { //function to allow player avatar to move upon key press
        const { x, y, width } = playerPosition;
        const maxX = 840;
        switch (event.key) {
            case 'a':
                if(x - stepSize >= 0){ // checks whether player is within bounds of background
                    setPlayerPosition({ x: x - stepSize, y, width }) //if 'a' key is pressed player avatar moves left
                }
                break;
            case 'd':
                if(x + stepSize <= maxX){
                    setPlayerPosition({ x: x + stepSize, y, width }) //if 'd' key is pressed player avatar moves right
                }
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
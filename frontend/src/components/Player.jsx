import React, { useContext } from 'react'

//Context imports
import { PositionData } from './Game';
import { useCharacter } from './CharacterContext';
import { usePicture } from './PictureContext';

const Player = () => {

    //Contexts
    const { charName } = useCharacter();
    const { selectedPicture } = usePicture();
    const { playerPosition } = useContext(PositionData)

    const { x, y } = playerPosition
    
    return (
        <div id='player' style={{
            position: 'absolute',
            left: x,
            bottom: y,
            height: '70px',
            width: '100px',
            zIndex: 2
        }}>

            <p style={{ zIndex: 1000 }} className='playcharactername' >{charName}</p>

            <img className='playcharacter' src={selectedPicture} alt="Selected Character" />
        </div>
    )
}

export default Player
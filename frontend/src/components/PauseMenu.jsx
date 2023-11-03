import React, { useContext, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { PlayerData } from './Game';
import { useCharacter } from './CharacterContext';
import { usePicture } from './PictureContext'; 



const PauseMenu = () => {

const {player, setPause, setShop } = useContext(PlayerData);
const { charName } = useCharacter();
const {selectedPicture} = usePicture();


const openShop = () => {
    setPause(false)
    setShop(true)
}

  return (
    <div id='pauseMenu'
    style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'darkgray', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 3}}>
            
                
                    <h3>{charName}</h3>
                    <img src={selectedPicture} alt="" height='200px'/>
                
        <div id='playerStats'>
                <ul>
                    <li>proficiency: {player.proficiency}</li>
                    <li>confidence: {player.confidence}</li>
                    <li>skills:<br/> {player.skills.map((skill, index) => (
                        <>
                        <span key={index}>{skill.name}</span><br/>
                        </>
                    ))}
                    </li>
                    <li>exp: {player.exp}</li>
                </ul>
            </div>
            <div id='pauseControls'
            style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
            <Button onClick={() => openShop()}>Shop</Button>
            <Button onClick={() => setPause(false)}>Resume</Button>
            </div>
    </div>
  )
}

export default PauseMenu
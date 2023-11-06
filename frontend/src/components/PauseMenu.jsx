import React, { useContext } from 'react'

//Context imports
import { PlayerData } from './Game';
import { useCharacter } from './CharacterContext';
import { usePicture } from './PictureContext';

//Style imports
import '../stylesheets/pauseMenu.css'
import Button from 'react-bootstrap/Button';

const PauseMenu = () => {

    const { player, setPause, setShop } = useContext(PlayerData);
    const { charName } = useCharacter();
    const { selectedPicture } = usePicture();


    const openShop = () => {
        setPause(false)
        setShop(true)
    }

    return (
        <div id='pauseMenu'>
            <div id='pauseContent'>

                <h3>{charName}</h3>
                <img src={selectedPicture} alt="" height='200px' />

                <div id='playerStats'>
                    <ul>
                        <li>proficiency: {player.proficiency}</li>
                        <li>confidence: {player.confidence}</li>
                        <li>skills:<br /> {player.skills.map((skill, index) => (
                            <>
                                <span key={index}>{skill.name}</span><br />
                            </>
                        ))}
                        </li>
                        <li>exp: {player.exp}</li>
                    </ul>
                </div>
                <div id='pauseControls'>
                    <Button onClick={() => openShop()}>Shop</Button>
                    <Button onClick={() => setPause(false)}>Resume</Button>
                </div>
            </div>
        </div>
    )
}

export default PauseMenu
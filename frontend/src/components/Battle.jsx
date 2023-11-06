import React, { useState, createContext, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

//Component imports
import Actionbar from './Actionbar';

//Context imports
import { PlayerData, PositionData } from './Game';
import { useCharacter } from './CharacterContext';
import { usePicture } from './PictureContext';

//Style imports
import '../stylesheets/Battle.css';
import { Modal, Button, ProgressBar } from 'react-bootstrap';

//Asset imports
import enemy1 from '../assets/images/bossenemy.png';

export const BattleContext = createContext();

const Battle = ({ enemyIndex }) => {
  
  //Contexts
  const { charName } = useCharacter();
  const { selectedPicture } = usePicture();
  const { player, setPlayer, setBattle, enemies } = useContext(PlayerData);
  const { enemyPositions, setEnemyPositions, handleStatIndex } = useContext(PositionData);
  
  //States
  const [hidden, setHidden] = useState(true);
  const [currentEnemy, setCurrentEnemy] = useState(enemies[enemyIndex]); //Intializes a state to hold current enemy stat info
  const [enemyCon, setEnemyCon] = useState(currentEnemy.confidence); //State to represent enemy health
  const [damageLog, setDamageLog] = useState('Prepare Yourself!'); 
  const [message, setMessage] = useState('');
  const [enemyMessage, setEnemyMessage] = useState('Battle Start'); 
  const [enemyLines, setEnemyLines] = useState([ 
    "YOU'RE GOING DOWN BUDDY!!!!",
    "YOU'RE NOT GETTING PAST ME!",
    "YOU'RE A CHUMP",
    "IS THAT ALL YOU GOT?"
  ]);
  const [showModal, setShowModal] = useState(false); //State to handle rendering of modal
  const [showModalLose, setShowModalLose] = useState(false); //State to control rendering of modal for losing

  //Functions
  const handleShowModal = () => {//Function to control opening of modal
    setShowModal(true);
  }

  const handleCloseModal = () => {//Function to control closeing of modal
    setShowModal(false);
    setBattle(false);
  }
  
  const updateMessage = (newMessage) => {//Function to update game messages
    setMessage(newMessage);
  };
  
  const handleHide = () => {//Function to control state of 'hide'
    if (hidden) {
      setHidden(false);
    }
    if (!hidden) {
      setHidden(true);
    }
  }
  
  const updatedEnemyPos = [...enemyPositions];//makes a copy of enemy positions state
  
  const getRandomEnemyLine = () => {//picks a random enemy line to appear
    const randomIndex = Math.floor(Math.random() * enemyLines.length);
    return enemyLines[randomIndex];
  };


  const endBattle = () => {//handles logic for the end of a battle
    if (enemyCon <= 0 || player.confidence <= 0) {
      handleShowModal();
      updatedEnemyPos[enemyIndex] = { ...updatedEnemyPos[enemyIndex], defeated: true };
      updatedEnemyPos[enemyIndex + 1] = { ...updatedEnemyPos[enemyIndex + 1], active: true };
      setEnemyPositions(updatedEnemyPos);
      setPlayer({ ...player, confidence: player.maxConfidence, exp: player.exp + currentEnemy.exp });
      handleStatIndex();
    }
  }

  
  
  const handleShowModalLose = () => { //
    setShowModalLose(true);
  }
  
  const handleCloseModalLose = () => {
    
  }
  
  const endBattleLose = () => {//Function for hadling player loss.
    if (player.confidence <= 0) {
      handleShowModalLose();
    }
  }

  useEffect(() => {
    if (enemyCon === 0) {//checks whether or not the enemy's health has reached zero. If so calls the endBattle function.
      endBattle();
    }
  }, [enemyCon]);

  useEffect(() => {//checks whhether or not the enemy's health has reached zero. If so callse the endBattleLose function.
    endBattleLose();
  }, [player.confidence]);

  return (
    <div>
      <div className="box">
        <div className="centered-element">
          {message && <img style={{ height: "650px",zIndex:10000000 }} src={message} alt="Exclamation Point" />}
        </div>
        <div className="target-box">
          <h2 className='character-info' >ENEMY</h2>
          <ProgressBar now={enemyCon} label={`${Math.round((enemyCon / currentEnemy.maxConfidence) * 100)}%`} variant="danger" />
          <div className='character-info' style={{ right: "5000px" }}>
            <img className='battleenemy' src={enemyPositions[enemyIndex].img} alt="Enemy" />
          </div>
        </div>
      </div>
      <div>
      </div>
      <BattleContext.Provider value={{ hidden, setHidden, handleHide, enemyCon, setEnemyCon, enemyLines, getRandomEnemyLine, setEnemyMessage, setDamageLog }}>
        <div className='overallCharacter'>
          <div className="character-box">
            <h1 className='character-info'>{charName}</h1>
            <ProgressBar now={player.confidence} label={`${Math.round((player.confidence / player.maxConfidence) * 100)}%`} min='0' max={player.maxConfidence} variant="success" />
            <div className='character-info'>
              <img className='battlecharacter' src={selectedPicture} alt="Selected Character" />
            </div>
          </div>
          <div className='playerAction'>
            <p>It's your turn to attack</p>
            <div className="enemy-message-box">
              {enemyMessage && <p>{enemyMessage}</p>}
            </div>
            <div className="damage-info-box">
              {damageLog && <p>{damageLog}</p>}
              <Actionbar enemyIndex={enemyIndex} updateMessage={updateMessage} />
            </div>
          </div>
        </div>
      </BattleContext.Provider>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Victory!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Congratulations! You have defeated the enemy. Make sure to spend the experience you have gained in the shop menu to prepare yourself for future battles.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModalLose} onHide={handleCloseModalLose}>
        <Modal.Header closeButton>
          <Modal.Title>Game Over</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your confidence has reached zero. You have lost the battle.
        </Modal.Body>
        <Modal.Footer>
          <Link to='/intro'>
            <Button variant="secondary" onClick={handleCloseModalLose}>
              Restart Game
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Battle;

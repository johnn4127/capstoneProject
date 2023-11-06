import React, { useState, createContext, useContext, useEffect } from 'react';
import { useCharacter } from './CharacterContext';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../stylesheets/Battle.css';
import { PlayerData } from './Game';
import Actionbar from './Actionbar';
import { PositionData } from './Game';
import { usePicture } from './PictureContext';
export const BattleContext = createContext();
import enemy1 from '../assets/images/bossenemy.png';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';
const Battle = ({ enemyIndex }) => {
  const { selectedPicture } = usePicture();
  const [hidden, setHidden] = useState(true);
  const { enemyPositions, setEnemyPositions, handleStatIndex, playerPosition, setPlayerPosition } = useContext(PositionData);

  // MODAL STUFF
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
    setBattle(false);
  }

  const [message, setMessage] = useState('');

  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };

  
  const handleHide = () => {
    if (hidden) {
      setHidden(false);
    }
    if (!hidden) {
      setHidden(true);
    }
  }

  const { player, setPlayer, setBattle, enemies, setEnemies } = useContext(PlayerData);
  const { charName } = useCharacter();
  const [currentEnemy, setCurrentEnemy] = useState(enemies[enemyIndex]);
  const updatedEnemyPos = [...enemyPositions];
  const [enemyCon, setEnemyCon] = useState(currentEnemy.confidence);
  const [damageLog, setDamageLog] = useState('Prepare Yourself!');
  const [enemyMessage, setEnemyMessage] = useState('Battle Start');
  const [enemyLines, setEnemyLines] = useState([
    "YOU'RE GOING DOWN BUDDY!!!!",
    "YOU'RE NOT GETTING PAST ME!",
    "YOU'RE A CHUMP",
    "IS THAT ALL YOU GOT?"
    
  ]);

  const getRandomEnemyLine = () => {
    const randomIndex = Math.floor(Math.random() * enemyLines.length);
    return enemyLines[randomIndex];
  };

  
  const endBattle = () => {
    if (enemyCon <= 0 || player.confidence <= 0) {
      handleShowModal();
      updatedEnemyPos[enemyIndex] = { ...updatedEnemyPos[enemyIndex], defeated: true };
      updatedEnemyPos[enemyIndex + 1] = { ...updatedEnemyPos[enemyIndex + 1], active: true };
      setEnemyPositions(updatedEnemyPos);
      setPlayer({ ...player, confidence: player.maxConfidence, exp: player.exp + currentEnemy.exp });
      handleStatIndex();
    }
  }

  useEffect(() => {
    if (enemyCon === 0) {
      endBattle();
    }
  }, [enemyCon]);

  
  const [showModalLose, setShowModalLose] = useState(false);
  const handleShowModalLose = () => {
    setShowModalLose(true);
  }

  const handleCloseModalLose = () => {
   
  }

  const endBattleLose = () => {
    if (player.confidence <= 0) {
      handleShowModalLose();
    }
  }

  useEffect(() => {
    endBattleLose();
  }, [player.confidence]);

  return (
    <div>
      <div className="box">
        <div className="centered-element">
          {message && <img style={{ height: "250px" }} src={message} alt="Exclamation Point" />}
        </div>
        <div className="target-box">
          <h2 className='character-info' >CODING ENEMY</h2>
          <ProgressBar now={enemyCon} label={`${Math.round((enemyCon / currentEnemy.maxConfidence) * 100)}%`} variant="danger" />
          <div className='character-info' style={{ right: "5000px" }}>
            <img className='battleenemy' src={enemy1} alt="Enemy" />
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
          Congratulations! You have defeated the enemy.
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

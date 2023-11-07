import React, { useContext } from 'react';

//Component imports
import Skillaction from './Skillaction';

//Context imports
import { PlayerData } from './Game';
import { BattleContext } from './Battle';

//Asset imports
import hit from '../assets/images/impact.gif';
import fireball from '../assets/images/fire.gif'
import thunder from '../assets/images/lightningstrike.gif'
import ice from '../assets/images/minato.gif'


const Actionbar = ({ enemyIndex, updateMessage }) => {

  //Contexts
  const { player, setPlayer, enemies } = useContext(PlayerData); // imports context for player and enemy stats
  const { hidden, handleHide, enemyCon, setEnemyCon, getRandomEnemyLine, setEnemyMessage, setDamageLog } = useContext(BattleContext); //imports contexts for for in-game battles

  const currentEnemy = enemies[enemyIndex]; // initalizes varibale to represent the current enemy being interacted with. 

  const handleAttack = () => {

    const playerDamage = Math.floor(Math.random() * (player.proficiency - 5 + 1) + 5); //sets player damage to a range
    const enemyDamage = Math.floor(Math.random() * (currentEnemy.proficiency - 5 + 1) + 5);  //sets enemy damage to a range
    updateMessage(hit);
    setTimeout(() => {
      updateMessage('');
    }, 700);

    setPlayer({ ...player, confidence: player.confidence - enemyDamage }); // subtracts the enemy damage from the players health
    setDamageLog(`You attacked Coding Enemy for ${playerDamage} damage.`);

    const enemyLine = getRandomEnemyLine();
    setEnemyMessage(`Coding Enemy: "${enemyLine}"`);

    setEnemyCon(enemyCon - playerDamage); //subtracts player damage from enemy health
    setDamageLog((prevDamageLog) => [
      ...prevDamageLog,
      `Coding Enemy attacked you for ${enemyDamage} confidence damage.`,
    ]);

    if (playerDamage > enemyCon) { //checks whether or not the player damage would be greater than remaining enemy health. If so sets the health to 0.
      setEnemyCon(0);
    }

    if (enemyDamage > player.confidence) { //checks whether or not the enemy damage would be greater than remaining player health. If so sets the health to 0.
      setPlayer({ ...player, confidence: 0 })
    }
  };

  const handleFireball = () => {
    const playerDamage = Math.floor(Math.random() * (player.proficiency - 5 + 1) + 15);
    const enemyDamage = Math.floor(Math.random() * (currentEnemy.proficiency - 5 + 1) + 5);
    updateMessage(fireball);
    setTimeout(() => {
      updateMessage('');
    }, 1500);

    setPlayer({ ...player, confidence: player.confidence - enemyDamage });
    setDamageLog(`Fireball does ${playerDamage} confidence damage.`);

    const enemyLine = getRandomEnemyLine();
    setEnemyMessage(`Coding Enemy: "${enemyLine}"`);

    setEnemyCon(enemyCon - playerDamage);
    setDamageLog((prevDamageLog) => [
      ...prevDamageLog,
      `Coding Enemy attacked you for ${enemyDamage} confidence damage.`,
    ]);

    if (playerDamage > enemyCon) {
      setEnemyCon(0);
    }
  };

  const handleThunderbolt = () => {
    const playerDamage = Math.floor(Math.random() * (player.proficiency - 5 + 1) + 25);
    const enemyDamage = Math.floor(Math.random() * (currentEnemy.proficiency - 5 + 1) + 5);
    updateMessage(thunder);
    setTimeout(() => {
      updateMessage('');
    }, 2500);

    setPlayer({ ...player, confidence: player.confidence - enemyDamage });
    setDamageLog(`Thunderbolt does ${playerDamage} confidence damage.`);

    const enemyLine = getRandomEnemyLine();
    setEnemyMessage(`Coding Enemy: "${enemyLine}"`);

    setEnemyCon(enemyCon - playerDamage);
    setDamageLog((prevDamageLog) => [
      ...prevDamageLog,
      `Coding Enemy attacked you for ${enemyDamage} confidence damage.`,
    ]);

    if (playerDamage > enemyCon) {
      setEnemyCon(0);
    }
  };

  const handleIceBlast = () => {
    const playerDamage = Math.floor(Math.random() * (player.proficiency - 5 + 1) +15);
    const enemyDamage = Math.floor(Math.random() * (currentEnemy.proficiency - 5 + 1) + 5);
    updateMessage(ice);
    setTimeout(() => {
      updateMessage('');
    }, 1400);

    setPlayer({ ...player, confidence: player.confidence - enemyDamage });
    setDamageLog(`Ice blast does ${playerDamage} confidence damage.`);

    const enemyLine = getRandomEnemyLine();
    setEnemyMessage(`Enemy: "${enemyLine}"`);

    setEnemyCon(enemyCon - playerDamage);
    setDamageLog((prevDamageLog) => [
      ...prevDamageLog,
      `Enemy attacked you for ${enemyDamage} confidence damage.`,
    ]);

    if (playerDamage > enemyCon) {
      setEnemyCon(0);
    }
  };

  return (
    <div>
      <button onClick={handleAttack}>Proficiency</button>
      <button onClick={handleFireball}>Fireball</button>
      <button onClick={handleThunderbolt}>Water Strike</button>
      <button onClick={handleIceBlast}>Summoning Skill</button>
      <button onClick={handleHide}>Items</button>
      {!hidden ? <div><Skillaction /></div> : null}
    </div>
  );
};

export default Actionbar;

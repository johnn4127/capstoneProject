import React, { useState, createContext, useContext } from 'react';
import Skillaction from './Skillaction';
import { PlayerData } from './Game';
import { BattleContext } from './Battle';
import hit from '../assets/images/impact.gif';
import fireball from '../assets/images/fire.gif'
import thunder from '../assets/images/lightningstrike.gif'
import ice from '../assets/images/iceshard.gif'
const Actionbar = ({ enemyIndex, updateMessage }) => {
  const { player, setPlayer, enemies, setEnemies } = useContext(PlayerData);

  const { hidden, setHidden, handleHide, enemyCon, setEnemyCon, enemyLines, getRandomEnemyLine, setEnemyMessage, setDamageLog } = useContext(BattleContext);

  const currentEnemy = enemies[enemyIndex];

  const handleAttack = () => {
    const playerDamage = Math.floor(Math.random() * (player.proficiency - 5 + 1) + 5);
    const enemyDamage = Math.floor(Math.random() * (currentEnemy.proficiency - 5 + 1) + 5);
    updateMessage(hit);
    setTimeout(() => {
      updateMessage(''); // Clear the message state after 1 second
    }, 700);

    setPlayer({ ...player, confidence: player.confidence - enemyDamage });
    setDamageLog(`You attacked Coding Enemy for ${playerDamage} damage.`);

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

  const handleFireball = () => {
    const playerDamage = Math.floor(Math.random() * (player.proficiency - 5 + 1) + 5);
    const enemyDamage = Math.floor(Math.random() * (currentEnemy.proficiency - 5 + 1) + 15);
    updateMessage(fireball);
    setTimeout(() => {
      updateMessage(''); // Clear the message state after 1 second
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
    const playerDamage = Math.floor(Math.random() * (player.proficiency - 5 + 1) + 5);
    const enemyDamage = Math.floor(Math.random() * (currentEnemy.proficiency - 5 + 1) + 35);
    updateMessage(thunder);
    setTimeout(() => {
      updateMessage(''); // Clear the message state after 1 second
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
    const playerDamage = Math.floor(Math.random() * (player.proficiency - 5 + 1) + 5);
    const enemyDamage = Math.floor(Math.random() * (currentEnemy.proficiency - 5 + 1) + 25);
    updateMessage(ice);
    setTimeout(() => {
      updateMessage(''); // Clear the message state after 1 second
    }, 700);

    setPlayer({ ...player, confidence: player.confidence - enemyDamage });
    setDamageLog(`Ice blast does ${playerDamage} confidence damage.`);

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

  return (
    <div>
      <button onClick={handleAttack}>Proficiency</button>
      <button onClick={handleFireball}>Fireball</button>
      <button onClick={handleThunderbolt}>Thunderbolt</button>
      <button onClick={handleIceBlast}>Ice Blast</button>
      <button onClick={handleHide}>Skills</button>
      {!hidden ? <div><Skillaction /></div> : null}
    </div>
  );
};

export default Actionbar;

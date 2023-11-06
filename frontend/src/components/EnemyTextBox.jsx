import React, { useState, useEffect } from 'react';

//Style imports
import '../stylesheets/Battle.css'

const EnemyTextBox = ({ message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 9000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return visible ? <div className="enemy-text-box">{message}</div> : null;
};

export default EnemyTextBox;

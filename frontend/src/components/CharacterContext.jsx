
import React, { createContext, useContext, useState } from 'react';

const CharacterContext = createContext();

export const useCharacter = () => {
  return useContext(CharacterContext);
};

export const CharacterProvider = ({ children }) => {
  const [charName, setCharName] = useState('');

  const setCharacterName = (name) => {
    setCharName(name);
  };

  return (
    <CharacterContext.Provider value={{ charName, setCharacterName }}>
      {children}
    </CharacterContext.Provider>
  );
};

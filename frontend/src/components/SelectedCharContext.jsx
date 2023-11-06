import React, { createContext, useContext, useState } from 'react';

const SelectedCharContext = createContext();

export const useSelectedChar = () => {
  return useContext(SelectedCharContext);
};

export const SelectedCharProvider = ({ children }) => {
  //States
  const [selectedCharacter, setSelectedCharacter] = useState('');

  const setSelectedChar = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <SelectedCharContext.Provider value={{ selectedCharacter, setSelectedChar }}>
      {children}
    </SelectedCharContext.Provider>
  );
};

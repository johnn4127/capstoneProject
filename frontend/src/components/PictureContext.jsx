import React, { createContext, useContext, useState } from 'react';

const PictureContext = createContext();

export const usePicture = () => {
  return useContext(PictureContext);
};

export const PictureProvider = ({ children }) => {
  const [selectedPicture, setSelectedPicture] = useState(null);
  console.log("Pic State: ", selectedPicture )

  const setPicture = (picture) => {
    console.log(`Picture: ${picture}`)
    setSelectedPicture(picture);
  };

  return (
    <PictureContext.Provider value={{ selectedPicture, setPicture }}>
      {children}
    </PictureContext.Provider>
  );
};

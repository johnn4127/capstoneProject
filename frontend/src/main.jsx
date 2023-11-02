import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CharacterProvider } from "./components/CharacterContext";
import { PictureProvider } from "./components/PictureContext";
import { SelectedCharProvider } from "./components/SelectedCharContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <SelectedCharProvider>
        <PictureProvider>
          <CharacterProvider>
            <App />
          </CharacterProvider>
        </PictureProvider>
      </SelectedCharProvider>
    </React.StrictMode>
  </BrowserRouter>
);

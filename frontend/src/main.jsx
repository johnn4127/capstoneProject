import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  BrowserRouter
} from 'react-router-dom'
import { CharacterProvider } from './components/CharacterContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
  <CharacterProvider>
    <App />
    </CharacterProvider>
  </React.StrictMode>
  </BrowserRouter>
)

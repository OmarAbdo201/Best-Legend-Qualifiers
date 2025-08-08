import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import TournamentProvider from './context/TournamentContext';
// ...existing code...
import App from './App.jsx'
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TournamentProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TournamentProvider>
  </StrictMode>,
)

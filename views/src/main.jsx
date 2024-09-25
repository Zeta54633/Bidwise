import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from './LandingPage/LandingPage'
import TeamPage from './TeamPage/TeamPage'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Build" element={<TeamPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

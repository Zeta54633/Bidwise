import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";  

import LandingPage from './LandingPage/LandingPage'

import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        {/* <Route path="Build-Team" element={<Blogs />} />
        <Route path="About" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      </Routes>
  </BrowserRouter>
)

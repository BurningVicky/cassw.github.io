import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import HeroSection from './sections/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <HeroSection />
        {/* Outras seções aqui */}
      </div>
    </Router>
  )
}

export default App
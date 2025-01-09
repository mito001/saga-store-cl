import React, { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderContent = () => {
    if (currentPage === 'home') {
      return <HeroSection setCurrentPage={setCurrentPage} />
    }

    switch(currentPage) {
      case 'products':
        return <Products />
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar setCurrentPage={setCurrentPage} />
      {renderContent()}
    </div>
  )
}

export default App
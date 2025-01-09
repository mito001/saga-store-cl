import React, { useState } from 'react'
import Navbar from './components/Navbar'
import KitchenProducts from './components/KitchenProducts'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />
      case 'products':
        return <KitchenProducts />
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  )
}

export default App
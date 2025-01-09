import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />
      case 'products':
        return <Products />
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
      default:
        return <Home setCurrentPage={setCurrentPage} />
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
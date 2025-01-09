import React from 'react'
import Navbar from './components/Navbar'
import KitchenProducts from './components/KitchenProducts'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <KitchenProducts />
    </div>
  )
}

export default App
import React from 'react'
import Header from './components/Header'
import Peliculas from './components/Peliculas'

const App = () => {
  return (
    <>
      <Header />
      <main className="container mt-4">
        <Peliculas />
      </main>
    </>
  )
}

export default App

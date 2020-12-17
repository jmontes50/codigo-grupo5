import React from 'react'
import Filtro from './components/filtro/Filtro'
import Header from './components/Header'
import Productos from './components/productos/Productos'

const App = () => {
  return (
    <>
      <Header />
      <main className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-2">
            <Filtro />
          </div>
          <div className="col-md-8">
            <Productos />
          </div>
          <div className="col-md-2">
            CARRITO
          </div>
        </div>
      </main>
    </>
  )
}

export default App

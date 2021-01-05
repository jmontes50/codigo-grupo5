import React, { useState } from 'react'
import Carrito from './components/carrito/Carrito'
import Filtro from './components/filtro/Filtro'
import Header from './components/Header'
import Productos from './components/productos/Productos'

const App = () => {
  const [termino, setTermino] = useState("");
  const [carrito, setCarrito] = useState([]);
  return (
    <>
      <Header />
      <main className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-2">
            <Filtro setTermino={setTermino} />
          </div>
          <div className="col-md-8">
            <Productos termino={termino}
              setCarrito={setCarrito} />
          </div>
          <div className="col-md-2">
            <Carrito carrito={carrito} setCarrito={setCarrito} />
          </div>
        </div>
      </main>
    </>
  )
}

export default App

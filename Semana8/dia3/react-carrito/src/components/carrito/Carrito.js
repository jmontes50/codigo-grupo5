import React from 'react'
import CarritoItem from './CarritoItem'

const Carrito = ({ carrito = [], setCarrito }) => {
  return (
    <div className="card">
      <div className="card-body">
        {
          carrito.length === 0 ?
            <p className="text-muted">
              <i className="fas fa-sad-cry mr-2 "></i>
              Tu carrito está vacío
            </p> :
            carrito.map((objProducto) => {
              return (<CarritoItem objProducto={objProducto} />)
            })
        }
      </div>
    </div>
  )
}

export default Carrito

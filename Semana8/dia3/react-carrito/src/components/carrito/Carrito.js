import React from 'react'
import CarritoItem from './CarritoItem'

const Carrito = ({ carrito = [], setCarrito }) => {
  // usar o consumir la variable de contexto CARRITOCONTEXT
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title text-center">
          Carrito de Compras
        </h4>
      </div>
      <div className="card-body">
        {
          carrito.length === 0 ?
            <p className="text-muted">
              <i className="fas fa-sad-cry mr-2 "></i>
              Tu carrito está vacío
            </p> :
            carrito.map((objProducto) => {
              return (<CarritoItem objProducto={objProducto}
                setCarrito={setCarrito} key={objProducto.prod_id} />)
            })
        }
      </div>
    </div>
  )
}

export default Carrito

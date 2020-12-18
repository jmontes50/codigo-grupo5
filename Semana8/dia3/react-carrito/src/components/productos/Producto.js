import React from 'react'

const Producto = ({ objProducto, setCarrito }) => {

  const agregarAlCarrito = () => {
    setCarrito(prevState => {
      return [...prevState, objProducto];
    })
  }

  return (
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-3">
      <div className="card shadow h-100">
        <img src={objProducto.prod_img} alt="" className="img-card-top" />
        <div className="card-body">
          <p className="card-title">{objProducto.prod_nom}</p>
          <p className="card-text">
            <small className="text-muted">Precio:</small><br />
            <strong>S/ {objProducto.prod_pre}</strong>
          </p>
        </div>
        <div className="card-footer text-right">
          <button className="btn btn-outline-dark" onClick={agregarAlCarrito}>
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Producto

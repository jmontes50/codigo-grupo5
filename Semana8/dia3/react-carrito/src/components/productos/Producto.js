import React from 'react'

const Producto = ({ objProducto }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-3">
      <div className="card shadow">
        <img src={objProducto.prod_img} alt="" className="img-card-top" />
        <div className="card-body">
          <p className="card-title">{objProducto.prod_nom}</p>
          <p className="card-text">
            <small className="text-muted">Precio:</small><br />
            <strong>S/ {objProducto.prod_pre}</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Producto

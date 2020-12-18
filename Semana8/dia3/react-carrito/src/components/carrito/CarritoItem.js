import React from 'react'

const CarritoItem = ({ objProducto, setCarrito }) => {

  const eliminarItem = () => {
    setCarrito((prevState) => {
      let carritoNuevo = prevState.filter((producto) => {
        if (producto.prod_id !== objProducto.prod_id) {
          return producto;
        }
      });
      return carritoNuevo;
    });
  }

  return (
    <div className="carrito-item">
      <img src={objProducto.prod_img} alt=""
        width="25" />
      <small>{objProducto.prod_nom}</small>
      <small>S/ {objProducto.prod_pre * objProducto.cant}</small>
      <small>({objProducto.cant})</small>
      <button className="btn btn-sm btn-outline-danger btn-eliminar"
        onClick={eliminarItem}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default CarritoItem

import React, { useState, useEffect } from 'react'
import { getProductos } from '../../services/servicios';
import Producto from './Producto';

const Productos = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then(data => {
      console.log(data);
      setProductos(data);
    })
  }, []);

  return (
    <div className="row">

      {
        productos.map((objProducto) => {
          return (<Producto key={objProducto.prod_id} objProducto={objProducto} />)
        })
      }

    </div>
  )
}

export default Productos

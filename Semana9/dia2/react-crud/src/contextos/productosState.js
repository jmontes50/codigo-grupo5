import React, { useEffect, useState } from 'react'
import { getProductos } from '../servicios/productosService';
import ProductosContext from './productosContext'

const ProductosState = ({ children }) => {

  const [productos, setProductos] = useState([]);
  const [cargandoProductos, setCargandoProductos] = useState(true);

  useEffect(() => {
    getProductos().then(data => {
      console.log(data);
    })
  }, [])

  return (
    <ProductosContext.Provider value={{}}>
      {children}
    </ProductosContext.Provider>
  )
}

export default ProductosState

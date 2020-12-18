import React, { useState, useEffect } from 'react'
import { getProductos } from '../../services/servicios';
import Producto from './Producto';

const Productos = ({ termino, setCarrito }) => {

  const [productos, setProductos] = useState([]);

  console.log(termino);

  useEffect(() => {
    console.log("useEffect Productos");
    getProductos(termino).then(data => {
      console.log(data);
      setProductos(data);
    })
  }, [termino]);

  return (
    <>
      {
        termino.trim().length > 2 ?
          <div className="row">
            <div className="col-12">
              <h3>Resultados para la búsqueda: {termino}</h3>
            </div>
          </div>
          :
          null
      }

      <div className="row">

        {
          productos.map((objProducto) => {
            return (<Producto key={objProducto.prod_id}
              objProducto={objProducto}
              setCarrito={setCarrito} />)
          })
        }

      </div>
    </>
  )
}

export default Productos

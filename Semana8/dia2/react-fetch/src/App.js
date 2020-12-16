import React, { useState } from 'react'
import { getProductos } from './services/servicios'

const App = () => {

  const [productos, setProductos] = useState([]);

  getProductos().then(data => {
    console.log(data);
    setProductos(data);
  });

  
  return (
    <div>
      <ul>
        {
          productos.map(prod => {
            return <li key={prod.prod_id}>{prod.prod_nom}</li>
          })
        }
      </ul>
    </div>
  )
}

export default App

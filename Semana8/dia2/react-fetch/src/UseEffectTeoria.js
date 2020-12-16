import React, { useState, useEffect } from 'react'
import { getProductos } from './services/servicios'

const App = () => {
  console.log("Inicio de App");
  const [productos, setProductos] = useState([]);
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(100);

  useEffect(() => {
    console.log("Inicio de UseEffect");
    getProductos().then(data => {
      console.log(data);
      setProductos(data);
    });
  }, [contador2]);

  return (
    <div>
      <ul>
        {
          productos.map(prod => {
            return <li key={prod.prod_id}>{prod.prod_nom}</li>
          })
        }
      </ul>
      <hr />
      <strong>Contador: </strong>{contador} <br />
      <button onClick={() => {
        setContador(contador + 1)
      }}>+1</button>
      <hr />
      <strong>Contador2: </strong>{contador2} <br />
      <button onClick={() => {
        setContador2(contador2 + 2);
      }}>
        +2
      </button>

    </div>
  )
}

export default App

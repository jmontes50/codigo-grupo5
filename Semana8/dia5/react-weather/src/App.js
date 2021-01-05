import React, { useState, useEffect } from 'react'
import Buscador from './components/buscador/Buscador'
import Forecast from './components/forecast/Forecast'
import Header from './components/Header'
import { getClimaPorCiudad } from './services/servicios'

const App = () => {

  const [pronosticos, setPronosticos] = useState([]);
  const [ciudad, setCiudad] = useState("");

  const modificarCiudad = (termino) => {
    // vlidar cositas antes de modificar el 
    // estado
    setCiudad(termino);
  }

  useEffect(() => {
    if (ciudad === "") {
      return;
    }
    getClimaPorCiudad(ciudad).then(data => {
      //TODO analizar a data.cod
      // si data.cod===200 continuamos
      // sino, setPronosticos([]);
      console.log(data.list);
      setPronosticos(data.list);
    })
  }, [ciudad]);

  return (
    <>
      <Header />
      <main className="container">
        <div className="row mt-5">
          <div className="col-md-4">
            <Forecast pronosticos={pronosticos} />
          </div>
          <div className="col-md-8">
            <Buscador modificarCiudad={modificarCiudad} pronosticos={pronosticos} />
          </div>
        </div>
      </main>
    </>
  )
}

export default App

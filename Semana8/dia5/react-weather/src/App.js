import React, { useState, useEffect, useRef } from 'react'
import Buscador from './components/buscador/Buscador'
import Forecast from './components/forecast/Forecast'
import Header from './components/Header'
import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";
import { getClimaPorCiudad } from './services/servicios'

const App = () => {

  const [pronosticos, setPronosticos] = useState([]);
  const [ciudad, setCiudad] = useState("");
  const [coordenadas, setCoordenadas] = useState(null);

  const referencia = useRef();
  console.log(referencia.current);

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

      setPronosticos(data.list);
      setCoordenadas([data.city.coord.lat, data.city.coord.lon]);

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
        {
          coordenadas ?
            <div className="row my-5">
              <div className="col">
                <MapContainer center={coordenadas} zoom={13} scrollWheelZoom={false} ref={referencia}>
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={coordenadas}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div> :
            null
        }
      </main>
    </>
  )
}

export default App

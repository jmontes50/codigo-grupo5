import React from 'react'
import Pronostico from './Pronostico'

const Forecast = ({ pronosticos }) => {
  return (
    <div className="row">
      {
        pronosticos.map((objClima) => {
          return <Pronostico objClima={objClima} />
        })
      }
    </div>
  )
}

export default Forecast

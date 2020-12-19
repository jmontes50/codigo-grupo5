import React from 'react'
import moment from "moment";

const Pronostico = ({ objClima }) => {

  let fechaYHoraString = moment(objClima.dt * 1000).format("DD/MM/YYYY HH:mm:ss")

  return (
    <div className="col-12 mb-3">
      <div className="card shadow">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 flex-centrado">
              <p className="display-4 text-center">
                {objClima.main.temp} &#8451;
            </p>
            </div>
            <div className="col-md-6 flex-centrado">
              <img src={`http://openweathermap.org/img/wn/${objClima.weather[0].icon}@4x.png`} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <p><small className="text-muted">Fecha y Hora:</small></p>
              <p><strong> {fechaYHoraString}</strong></p>
            </div>
            <div className="col-md-4">
              <p><small className="text-muted">Sensación térmica:</small></p>
              <p><strong>{objClima.main.feels_like} &#8451;</strong></p>
            </div>
            <div className="col-md-4">
              <p><small className="text-muted">Humedad:</small></p>
              <p><strong>{objClima.main.humidity}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )


}

export default Pronostico

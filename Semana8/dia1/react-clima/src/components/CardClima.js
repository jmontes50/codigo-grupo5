import React from 'react'

const CardClima = ({ objClima }) => {

  let fechaYHoraString = "";
  let unix = new Date(objClima.dt * 1000);
  fechaYHoraString = unix.getDate() + "/" + (unix.getMonth() + 1) + "/" + unix.getFullYear()
    + " " + unix.getHours() + ":" + unix.getMinutes();


  return (
    <div className="card shadow">
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <p className="display-4 text-center">
              {objClima.main.temp} &#8451;
            </p>
          </div>
          <div className="col-md-6 flex-centrado">
            <img src="http://placehold.it/60X60" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <p><small className="text-muted">Fecha y Hora:</small></p>
            <p><strong> {fechaYHoraString}</strong></p>
          </div>
          <div className="col-md-4">
            
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  )
}

export default CardClima

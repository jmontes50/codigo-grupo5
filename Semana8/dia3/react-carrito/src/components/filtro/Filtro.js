import React, { useState } from 'react'

const Filtro = ({ setTermino }) => {

  const [buscar, setBuscar] = useState("");

  const handleChange = (e) => {
    setBuscar(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(buscar);
    setTermino(buscar);
  }

  return (
    <div className="card shadow">
      <div className="card-header">
        <h4 className="card-title text-center">
          Filtro
        </h4>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control"
              placeholder="Buscar productos"
              value={buscar}
              onChange={handleChange} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Filtro

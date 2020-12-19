import React, { useState } from 'react'

const Buscador = ({ modificarCiudad }) => {
  const [termino, setTermino] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    modificarCiudad(termino);
  }

  return (
    <div className="row">
      <div className="col-12">
        <div className="card shadow">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" className="form-control"
                  placeholder="Buscar ciudad" value={termino}
                  onChange={(e) => {
                    setTermino(e.target.value);
                  }} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Buscador

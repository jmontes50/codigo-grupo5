import React, { useState, useRef } from 'react'
import { postImagenPlato, postPlato } from '../../../../services/platoService';

const AdminCrearPlatoScreen = () => {

  const [formulario, setFormulario] = useState({
    plato_nom: "",
    plato_pre: 0,
    categoria_id: 1
  });

  const referenciaImagen = useRef();

  const handleChange = e => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    postPlato(formulario).then(data => {
      if (data.ok) {
        postImagenPlato(referenciaImagen.current.files[0], data.content.plato_id).then(rpta => {
          console.log(rpta);
          setFormulario({
            plato_nom: "",
            plato_pre: 0,
            categoria_id: 1
          })
        })
      }
    })

  }

  return (
    <main className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <div className="card-header">
              <h4>Registrar un nuevo Plato</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="">Nombre:</label>
                  <input type="text" className="form-control"
                    name="plato_nom" value={formulario.plato_nom} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="">Imagen:</label>
                  <input ref={referenciaImagen} type="file" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Precio:</label>
                  <input type="number" className="form-control"
                    name="plato_pre" value={formulario.plato_pre} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="">Categoria:</label>
                  <input type="number" className="form-control"
                    name="categoria_id" value={formulario.categoria_id} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary" type="submit">
                    Crear Plato
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AdminCrearPlatoScreen

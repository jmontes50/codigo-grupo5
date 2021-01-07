import React, { useState } from 'react'
import Swal from "sweetalert2";


const formularioVacio = {
  prod_nom: "",
  prod_pre: 0,
  prod_sku: 0,
  prod_img: "",
  cat_id: 1,
  prod_stock: 0,
}

const ProductoFormEditar = () => {

  const [formulario, setFormulario] = useState(formularioVacio)

  const handleChange = e => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  }

  const submit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "¿Seguro de crear el producto?",
      icon: "question",
      text: "Los cambios se guardarán en la base de datos",
      showCancelButton: true
    }).then(rpta => {
      if (rpta.isConfirmed) {
        //consumir el servicio

      }
    })

  }

  return (
    <form onSubmit={submit}>
      <div className="form-group">
        <label htmlFor="prod_nom">Nombre:</label>
        <input type="text"
          id="prod_nom"
          name="prod_nom"
          placeholder="Ejm: TV Smart 70"
          className="form-control"
          value={formulario.prod_nom}
          onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="prod_pre">Precio:</label>
        <input
          type="number"
          name="prod_pre"
          value={formulario.prod_pre}
          onChange={handleChange}
          id="prod_pre"
          className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="prod_stock">Stock:</label>
        <input
          type="number"
          id="prod_stock"
          name="prod_stock"
          value={formulario.prod_stock}
          onChange={handleChange}
          className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="prod_sku">SKU:</label>
        <input
          type="text"
          id="prod_sku"
          name="prod_sku"
          value={formulario.prod_sku}
          onChange={handleChange}
          readOnly
          className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="cat_id">Categoria:</label>
        <input
          type="number"
          id="cat_id"
          name="cat_id"
          value={formulario.cat_id}
          onChange={handleChange}
          className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="prod_img">Imagen:</label>
        <textarea name="prod_img"
          value={formulario.prod_img}
          onChange={handleChange}
          id="prod_img" cols="30"
          className="form-control" rows="5"></textarea>
      </div>
      <div className="form-group">
        <button className="btn btn-primary"
          type="submit">Crear Producto</button>
      </div>
    </form>

  )
}

export default ProductoFormEditar

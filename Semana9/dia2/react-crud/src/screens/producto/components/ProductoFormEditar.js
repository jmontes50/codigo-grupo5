import React, { useContext, useState } from 'react'
import Swal from "sweetalert2";
import ProductosContext from '../../../contextos/productosContext';
import CategoriasContext from '../../../contextos/categoriasContext';
import { putProducto } from '../../../servicios/productosService';


const ProductoFormEditar = () => {

  const { productoEditar, setModalEditar, obtenerProductos } = useContext(ProductosContext);
  const { categorias } = useContext(CategoriasContext);
  const [formulario, setFormulario] = useState(productoEditar);


  const handleChange = e => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  }

  const submit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: `¿Seguro de editar el producto ${productoEditar.prod_nom} por ${formulario.prod_nom}?`,
      icon: "question",
      text: "Los cambios se guardarán en la base de datos",
      showCancelButton: true
    }).then(rpta => {
      if (rpta.isConfirmed) {
        putProducto(formulario).then(data => {
          if (data.prod_id) {
            setModalEditar(false);
            obtenerProductos();
            Swal.fire({
              title: "Editado!",
              icon: "success",
              timer: 700,
              showCancelButton: false
            });
          }
        });
      }
    })

  }

  return (
    <form onSubmit={submit}>

      <div className="form-group">
        <label htmlFor="prod_id">Id:</label>
        <input type="text"
          id="prod_id"
          name="prod_id"
          className="form-control"
          value={formulario.prod_id}
          onChange={handleChange} readOnly />
      </div>
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
          className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="cat_id">Categoria:</label>
        <select id="cat_id" name="cat_id" value={formulario.cat_id}
          onChange={handleChange}
          className="form-control" >
          <option value="0">--Seleccione--</option>
          {
            categorias.map(objCategoria => {
              return <option value={objCategoria.cat_id} key={objCategoria.cat_id}>
                {objCategoria.cat_nom}
              </option>
            })
          }

        </select>



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
          type="submit">Editar Producto</button>
      </div>
    </form>

  )
}

export default ProductoFormEditar

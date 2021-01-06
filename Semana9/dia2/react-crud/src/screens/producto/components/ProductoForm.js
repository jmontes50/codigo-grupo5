import React from 'react'

const ProductoForm = () => {
  return (
    <section className="col-md-4">
      <div className="card shadow">
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="prod_nom">Nombre:</label>
              <input type="text" id="prod_nom"
                placeholder="Ejm: TV Smart 70"
                className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="prod_pre">Precio:</label>
              <input type="number" id="prod_pre"
                className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="prod_stock">Stock:</label>
              <input type="number" id="prod_stock"
                className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="prod_sku">SKU:</label>
              <input type="text" id="prod_sku"
                readOnly
                className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="cat_id">Categoria:</label>
              <input type="number" id="cat_id"
                className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="prod_img">Imagen:</label>
              <textarea name="" id="prod_img" cols="30"
                className="form-control" rows="5"></textarea>
            </div>
            <div className="form-group">
              <button className="btn btn-primary"
                type="submit">Crear Producto</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ProductoForm

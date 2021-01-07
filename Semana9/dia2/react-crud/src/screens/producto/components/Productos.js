import React, { useContext } from 'react'
import ProductosContext from '../../../contextos/productosContext';

const Productos = () => {
  const { productos,
    cargandoProductos,
    obtenerProductos,
    setModalEditar } = useContext(ProductosContext);

  return (
    <section className="col-md-8">
      <div className="card shadow">
        <div className="card-body">

          {
            cargandoProductos ?
              <div className="alert alert-info text-center" role="alert">
                <h4 className="alert-heading">Cargando productos</h4>
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <p className="mb-0"></p>
              </div>
              :
              (
                <>
                  <div className="text-right mb-3">
                    <button className="btn btn-success" onClick={() => {
                      obtenerProductos();
                    }}>REFRESCAR TABLA</button>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Stock</th>
                          <th>SKU</th>
                          <th>Categoría</th>
                          <th>Imagen</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          productos.map((objProducto) => {
                            return (<tr key={objProducto.prod_sku}>
                              <td>{objProducto.prod_id}</td>
                              <td>{objProducto.prod_nom}</td>
                              <td>{objProducto.prod_pre}</td>
                              <td>{objProducto.prod_stock}</td>
                              <td>{objProducto.prod_sku}</td>
                              <td>{objProducto.cat_id}</td>
                              <td><img src={objProducto.prod_img} alt="" width="65" /></td>
                              <td>
                                <button className="btn btn-secondary" onClick={() => {
                                  setModalEditar(true);
                                }}>
                                  Editar
                                </button>
                              </td>
                            </tr>)
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                </>
              )

          }


        </div>
      </div>
    </section>
  )
}

export default Productos

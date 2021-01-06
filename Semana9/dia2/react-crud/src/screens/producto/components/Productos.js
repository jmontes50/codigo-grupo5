import React, { useContext } from 'react'
import ProductosContext from '../../../contextos/productosContext';

const Productos = () => {
  const { productos, cargandoProductos, obtenerProductos } = useContext(ProductosContext);

  return (
    <section className="col-md-8">
      <div className="card shadow">
        <div className="card-body">

          {
            cargandoProductos ?
              <div>Cargando...</div> :
              (
                <>
                  <button className="btn btn-warning" onClick={() => {
                    obtenerProductos();
                  }}>REFRESCAR TABLA</button>
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
                              <td>Acciones</td>
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

import React, { useState } from 'react'
import ProductoForm from './components/ProductoForm'
import Productos from './components/Productos'

const ProductoScreen = () => {

  const [formCrear, setFormCrear] = useState(false);

  return (
    <main className="container-fluid mt-5">
      <div className="row mb-4">
        <div className="col text-right">
          <button className="btn btn-warning shadow" onClick={() => {
            setFormCrear(!formCrear);
          }}>
            Crear Producto
          </button>
        </div>
      </div>
      <div className="row">
        <Productos />
        {
          formCrear && <ProductoForm />
        }
      </div>
    </main>
  )
}

export default ProductoScreen

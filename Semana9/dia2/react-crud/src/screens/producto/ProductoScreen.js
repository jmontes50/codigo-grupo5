import React from 'react'
import ProductoForm from './components/ProductoForm'
import Productos from './components/Productos'

const ProductoScreen = () => {
  return (
    <main className="container-fluid">
      <div className="row">
        <Productos />
        <ProductoForm />
      </div>
    </main>
  )
}

export default ProductoScreen

import React, { useState } from 'react'
import ProductoForm from './components/ProductoForm'
import Productos from './components/Productos'
import { Modal } from "react-bootstrap";
import { useContext } from 'react';
import ProductosContext from '../../contextos/productosContext';
import ProductoFormEditar from './components/ProductoFormEditar';

const ProductoScreen = () => {

  const [formCrear, setFormCrear] = useState(false);
  const { modalEditar, setModalEditar } = useContext(ProductosContext)

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

      <Modal show={modalEditar} onHide={() => {
        setModalEditar(false);
      }}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductoFormEditar />
        </Modal.Body>

      </Modal>

    </main>
  )
}

export default ProductoScreen

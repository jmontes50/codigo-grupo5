import React, { useContext } from 'react'
import { Modal } from "react-bootstrap";

import PosContext from '../../../../../context/pos/posContext';

const PosModalBoleta = () => {

  const { modal_boleta, setModalBoleta } = useContext(PosContext);

  return (
    <>
      <Modal show={modal_boleta} onHide={() => {
        setModalBoleta(false);
      }}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          aqui irá plantilla
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary">
            Imprimir
          </button>
          <button className="btn btn-danger">
            Cerrar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PosModalBoleta

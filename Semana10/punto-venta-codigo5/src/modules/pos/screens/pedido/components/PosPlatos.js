import React, { useContext, useState } from 'react'
import PosContext from '../../../../../context/pos/posContext';
import PosPlato from './PosPlato'

const PosPlatos = () => {

  const [platos, setPlatos] = useState([]);
  const { categoria_global } = useContext(PosContext);

  // SI NO TENEMOS UNA CATEGORIA GLOBAL, NO MOSTRAR NADA
  // SI TENEMOS UNA CATEGORIA GLOBAL, CARGAR LOS PLATOS DE DICHA CATEGORÍA
  // SI LA CATEOGRÍA GLOBAL CAMBIA, EL COMPONENTE POSPLATOS, DEBE ACTUALIZAR LA INFO
  // CON LOS NUEVOS PLATOS

  return (
    <div className="carta__platos">
      <PosPlato />
      <PosPlato />
      <PosPlato />
      <PosPlato />
      <PosPlato />
      <PosPlato />
      <PosPlato />
    </div>
  )
}

export default PosPlatos

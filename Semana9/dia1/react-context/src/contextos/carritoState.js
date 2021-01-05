import React, { useState } from 'react'
import CarritoContext from './carritoContext';

const CarritoState = ({ children }) => {

  const [cantidad, setCantidad] = useState(15);

  return (
    <CarritoContext.Provider value={{
      cantidad: cantidad
    }}>
      {children}
    </CarritoContext.Provider>
  )
}

export default CarritoState

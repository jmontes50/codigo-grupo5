import React, { useReducer } from 'react'
import PosContext from './posContext'
import PosReducer from './posReducer';

const PosState = ({ children }) => {

  const [state, dispatch] = useReducer(PosReducer, {
    categoria_global: null,
    mesa_global: null,
  });

  const seleccionarCategoriaGlobal = objCategoria => {
    // intentar seleccionar o settear una categoria global
    dispatch({
      data: objCategoria,
      type: "SELECCIONAR_CATEGORIA"
    });
  }

  const seleccionarMesaGlobal = objMesa => {
    dispatch({
      data: objMesa,
      type: "SELECCIONAR_MESA"
    })
  }


  return (
    <PosContext.Provider value={{
      mesa_global: state.mesa_global,
      categoria_global: state.categoria_global,
      seleccionarCategoriaGlobal: seleccionarCategoriaGlobal,
      seleccionarMesaGlobal: seleccionarMesaGlobal
    }}>
      {children}
    </PosContext.Provider>
  )
}

export default PosState

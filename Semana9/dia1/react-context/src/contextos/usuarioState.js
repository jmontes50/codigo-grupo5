import React, { useState } from 'react'
import UsuarioContext from './usuarioContext'

const UsuarioState = ({ children }) => {
  const [usu, setUsu] = useState("Gabriela")

  return (
    <UsuarioContext.Provider value={{
      nombre: usu,
      setNombre: setUsu
    }}>
      {children}
    </UsuarioContext.Provider>
  )
}

export default UsuarioState

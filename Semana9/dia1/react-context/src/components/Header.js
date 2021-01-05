import React, { useContext } from 'react'
import UsuarioContext from '../contextos/usuarioContext'

const Header = () => {

  const { nombre } = useContext(UsuarioContext);

  return (
    <>
      <nav>
        <strong><small>{nombre}</small></strong>
      </nav>
      <header className="header">
        TITULO
      </header>
    </>
  )
}

export default Header

import React, { useContext } from 'react'
import CarritoContext from '../contextos/carritoContext';
import UsuarioContext from '../contextos/usuarioContext'

const Header = () => {

  const { nombre } = useContext(UsuarioContext);
  const { cantidad } = useContext(CarritoContext);
  return (
    <>
      <nav>
        <strong><small>{nombre}</small></strong>
        -
        Carrito: <strong>{cantidad}</strong>
      </nav>
      <header className="header">
        TITULO
      </header>
    </>
  )
}

export default Header

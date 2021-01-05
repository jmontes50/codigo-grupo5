import React, { useContext } from 'react'
import UsuarioContext from '../contextos/usuarioContext';

const Perfil = () => {

  const x = useContext(UsuarioContext);
  console.log(x);

  return (
    <section>
      Nombre de Usuario: <strong>{x.nombre}</strong>
    </section>
  )
}

export default Perfil

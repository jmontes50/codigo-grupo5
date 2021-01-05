import React, { useContext } from 'react'
import UsuarioContext from '../contextos/usuarioContext';

const EditarPerfil = () => {

  const { setNombre } = useContext(UsuarioContext);

  return (
    <div>

      <button onClick={() => {
        setNombre("Dayana");
      }}>Editar Perfil</button>
    </div >
  )
}

export default EditarPerfil

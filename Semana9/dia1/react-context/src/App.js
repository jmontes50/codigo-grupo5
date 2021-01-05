import React, { useState } from 'react'
import EditarPerfil from './components/EditarPerfil';
import Header from './components/Header';
import Perfil from './components/Perfil';
import UsuarioContext from "./contextos/usuarioContext";

const App = () => {

  const [usu, setUsu] = useState("Gabriela")

  return (
    <UsuarioContext.Provider value={{
      nombre: usu,
      setNombre: setUsu
    }}>
      <Header />
      <hr />
      <main>
        <Perfil />
        <hr />
        <EditarPerfil />
      </main>
    </UsuarioContext.Provider>
  )
}

export default App

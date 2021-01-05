import React from 'react'
import EditarPerfil from './components/EditarPerfil';
import Header from './components/Header';
import Perfil from './components/Perfil';
import CarritoState from './contextos/carritoState';
import UsuarioState from './contextos/usuarioState';

const App = () => {

  return (
    <CarritoState>
      <UsuarioState>
        <Header />
        <hr />
        <main>
          <Perfil />
          <hr />
          <EditarPerfil />
        </main>
      </UsuarioState>
    </CarritoState>
  )
}

export default App

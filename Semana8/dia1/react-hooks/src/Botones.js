import React from 'react'

const Botones = ({ setContador, contador, saludar }) => {
  console.log("Componente Botones: " + contador);
  return (
    <div>
      <button onClick={() => {
        setContador(contador + 1);
      }}>+1</button>
      <button onClick={() => {
        setContador(contador - 1);
      }}>-1</button>
      <button onClick={() => {
        setContador(0);
      }}>0</button>
      <button onClick={() => {
        saludar();
      }}>
        SALUDAR!
      </button>
    </div>
  )
}

export default Botones

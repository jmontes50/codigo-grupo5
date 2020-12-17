import React, { useState } from 'react'

const FormularioState = () => {

  const [nombre, setNombre] = useState("");
  const [horas, setHoras] = useState(0);

  const enviarFormulario = (e) => {
    e.preventDefault();
    console.log(`Nombre: ${nombre}`);
    console.log(`Horas: ${horas}`);
  }

  return (
    <fieldset>
      <legend>Registrar Curso - Formulario controlado por STATE</legend>
      <form onSubmit={enviarFormulario}>
        <p>
          <label htmlFor="">Nombre del Curso</label>
          <input type="text" name="" id="" placeholder="Ejm: ReactJS"
            onChange={(e) => {
              console.log(e);
              setNombre(e.target.value)
            }} value={nombre} />
        </p>
        <p>
          <label htmlFor="">Cantidad de Horas</label>
          <input type="number" name="" id=""
            onChange={(e) => {
              setHoras(e.target.value);
            }} value={horas} />
        </p>
        <p>
          <button type="submit">
            Enviar formulario
          </button>
        </p>
      </form>
    </fieldset>
  )
}

export default FormularioState

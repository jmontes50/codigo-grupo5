import React, { useState } from 'react'

const FormularioState2 = () => {

  const [formulario, setFormulario] = useState({
    nombre: "",
    horas: 0
  });

  const enviarFormulario = e => {
    e.preventDefault();
    console.log(formulario);
  }

  const handleChange = e => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  }

  return (
    <fieldset>
      <legend>Registrar Curso - Formulario controlado por STATE</legend>
      <form onSubmit={enviarFormulario}>
        <p>
          <label htmlFor="">Nombre del Curso</label>
          <input type="text" name="nombre" id="" placeholder="Ejm: ReactJS"
            value={formulario.nombre} onChange={handleChange} />
        </p>
        <p>
          <label htmlFor="">Cantidad de Horas</label>
          <input type="number" name="horas" id=""
            value={formulario.horas} onChange={handleChange} />
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

export default FormularioState2

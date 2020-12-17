import React, { useRef } from 'react'

const FormularioRefs = () => {

  const refNombre = useRef();
  const refHoras = useRef();

  const enviarFormulario = e => {
    e.preventDefault();
    console.log("enviando el formulariooooo");
    console.log(`Nombre: ${refNombre.current.value}`);
    console.log(`Horas: ${refHoras.current.value}`);
  }

  return (
    <fieldset>
      <legend>Registrar Curso</legend>
      <form onSubmit={enviarFormulario}>
        <p>
          <label htmlFor="">Nombre del Curso</label>
          <input type="text" name="" id="" placeholder="Ejm: ReactJS"
            ref={refNombre} />
        </p>
        <p>
          <label htmlFor="">Cantidad de Horas</label>
          <input type="number" name="" id="" ref={refHoras} />
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

export default FormularioRefs

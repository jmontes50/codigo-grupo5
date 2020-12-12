import React from 'react'

const Usuario = (props) => {
  return (
    <li className="list-usuario">
      {props.usu.apellido}
    </li>
  )
}

export default Usuario

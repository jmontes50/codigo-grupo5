import React from 'react'
import Usuario from "./Usuario";
const Usuarios = (props) => {
  console.log(props.users);
  console.log(props.miTitulo);
  let lis = props.users.map((usu) => {
    return (<Usuario usu={usu} key={usu.id} />);
  })

  return (
    <div>
      <ul>
        {lis}
      </ul>
    </div>
  )
}

export default Usuarios

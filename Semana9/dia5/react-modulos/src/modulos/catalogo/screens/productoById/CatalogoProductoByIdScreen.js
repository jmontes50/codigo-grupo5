import React from 'react'

const CatalogoProductoByIdScreen = (props) => {

  // forma 1 de obtner los parámetros por la url
  const { match: { params: { id } } } = props;
  console.log(id);
  // forma 2
  // const { match } = props;
  // const { params } = match;
  // const { id } = params;
  // console.log(id);
  //forma 3
  // const id = props.match.params.id;



  return (
    <div>
      MOSTRANDO UN PRODUCTO INDIVIDUAL DADO SU ID = {id}
      <br />
      información completa
    </div>
  )
}

export default CatalogoProductoByIdScreen

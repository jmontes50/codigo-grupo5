const PosReducer = (stateActual, action) => {
  //OJO Todo lo que retorne un REDUCER es el nuevo
  // state
  if (action.type === "SELECCIONAR_CATEGORIA") {
    return {
      ...stateActual,
      categoria_global: action.data
    }
  }
  if (action.type === "SELECCIONAR_MESA") {
    return {
      ...stateActual,
      mesa_global: action.data
    }
  }
  return { ...stateActual }
}
export default PosReducer;
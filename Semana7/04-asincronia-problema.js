
const buscarPorDni = (dni) => {

  // Tiempo de demora de buscar el dni en la base de datos 300ms
  let respuesta = "nada";
  setTimeout(() => {
    respuesta = "Jorge Garnica";
  }, 200);
  return respuesta;
}

let nombre = buscarPorDni("48154512");
document.write(nombre);
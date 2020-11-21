/**
 * Las funciones, también pueden retornar un valor con la palabra reservada:
 * "return"
 * return => retorna un valor a donde se ha invocado la función
 * return => finaliza la función. Por ello, no se debe colocar nada debajo
 * de la sentencia "return"
 */
function cuboDeUnNumero(numero) {
  let rpta = numero * numero * numero;
  return rpta;
}
let cubo14 = cuboDeUnNumero(14);

console.log(cubo14);
console.log(cubo14 + cuboDeUnNumero(5));


/**
 * Función que recibe un arreglo de nombres (STRING) y un nombre
 * a buscar dentro del arreglo de nombres.
 * Si el nombre existe, retorna true, y si no existe, retorna false
 * @param {Array<string>} nombres arreglo de nombres en string
 * @param {string} nombreBuscado el nombre a buscar
 * @returns {boolean} `true` o `false` como respuesta
 */
function buscarNombre(nombres, nombreBuscado) {
  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === nombreBuscado) {
      return true;
    }
  }
  return false;
}
const nombres = ["jorge", "dayana", "paty", "maria", "victor", "kyra"];

if (buscarNombre(nombres, "maria")) {
  console.log("María existe en la base de datos de nombres");
} else {
  console.log("María NO EXISTE en la bd");
}

// Con operador ternario ??????

console.log("María " + (buscarNombre(nombres, "maria") ? "SÍ " : "NO ") + "existe en la BD");

/**
 * 1 Funciones que reciben parámetros y no retornan valor
 * 2 Funciones que reciben parámetros y retornan valor
 * 3 Funciones que no reciben parámetros y retornan valor
 * 4 Funciones que no reciben parámetros ni retornan valor
 */
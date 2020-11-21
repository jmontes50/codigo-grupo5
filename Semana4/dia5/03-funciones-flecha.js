/**
 * Las funciones de flecha, son lo mismo
 * que las funciones anónimas.
 * La diferencia es la sintaxis (es más moderna)
 */

/**
 * Función que recibe un número "n" y retorna 
 * un arreglo con "n" nombres ingresados por el 
 * usuario
 * @param {number} n 
 */
const leerUsuarios = (n) => {
  let nombres = [];
  for (let i = 0; i < n; i++) {
    let nuevoNombre = prompt(`Ingrese el nombre ${i + 1}`)
    nombres.push(nuevoNombre);
  }
  return nombres;
}

const arregloNombres = leerUsuarios(6);
console.log(arregloNombres);
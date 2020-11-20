/**
 * Algebra de bool
 */


let edad = 20;
let cazado = false;
/**
 * La persona ingresa al establecimiento
 * si es mayor de edad y no tiene novia
 */

if (edad >= 18) {
  if (cazado !== true) {
    console.log("pase joven");
  }
}
// Usando operadores lógicos
if (edad >= 18 && cazado !== true) {
  console.log("pase joven");
} else {
  console.log("no admitido");
}



/**
* Calcular si un año ingresado es bisiesto
*
* Teoría.
* Los años bisiestos son divisibles entre 4 pero NO entre 100
* Por otro lado, si son divisibles entre 400 también son bisiestos
*/

let anio = 1991;
if ((anio % 400 === 0) || ((anio % 4 === 0) && (anio % 100 !== 0))) {
  console.log("SI ES BISIESTO");
} else {
  console.log("NO ES BISIESTO");
}
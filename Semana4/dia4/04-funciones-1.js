/**
 * Las funciones son porciones de código que se pueden ejecutar
 * en cualquier punto del programa y varias veces si fuera
 * necesario
 */

// La función sólo está siendo declarada mas no,
// invocada
function imprimirMayor(arreglo = [], nombre = "") {
  let mayor = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > mayor) {
      mayor = arreglo[i];
    }
  }
  // if (nombre === "" || arreglo.length === 0) {
  //   console.error("No se han enviado los parametros a la función");
  // } else {
  //   console.log(`La mayor de las ${nombre} es ${mayor}`);
  // }

  if (nombre !== "" && arreglo.length > 0) {
    console.log(`La mayor de las ${nombre} es ${mayor}`);
  } else {
    console.error("No se han enviado los parametros a la función");
  }
}

let notas = [10, 15, 12, 05, 20, 11.5];
let edades = [12, 50, 20, 60, 58];
let facturas = [100, 520.50, 851, 5000, 12];
// A continuación llamamos o invocamos a la función
imprimirMayor(edades, "Edades");
imprimirMayor(notas, "Notas");
imprimirMayor(facturas)
imprimirMayor()
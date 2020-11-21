/**
 *  
 */

let saludar = function () {
  console.log("Saludando");
}
saludar();


const mayor = function (a, b) {
  return a > b ? a : b;
}

console.log(mayor(50, 100));
/**
 * reto => Usando la función "mayor"
 * calcular el mayor de 5 números
 * e imprimir dicho valor OJO: NO alterar la funcion mayor
 */

console.log(mayor(mayor(mayor(20, 15), mayor(52, 10)), 13));
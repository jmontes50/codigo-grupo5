/**
 * El operador ternario, sirve para resumir un if-else.
 * Como requisito, tanto el if como el else, deben tener
 * una sola línea de codigo interno
 */

let dcto = 0;
let productos = [12.5, 13.0, 80.0, 800, 900];
let total = 0;

for (let i = 0; i < productos.length; i++) {
  total = total + productos[i];
}

/**
 * Sí el total a pagar es mayor a S/. 500 Hacer el descuento
 * del 5%, en caso contrario, el descuento será del 1%
 */

if (total > 500) {
  dcto = total * 0.05
} else {
  dcto = total * 0.01
}

dcto = total > 500 ? total * 0.05 : total * 0.01;


let numero1 = 3847;
let numero2 = 3434;
let max = numero1 > numero2 ? numero1 : numero2;
console.log(max);

// haciendo un console log, sin usar la igualdad
// FORMA 1
numero1 > numero2 ? console.log(numero1) : console.log(numero2);
// FORMA 2
console.log(numero1 > numero2 ? numero1 : numero2)
// FORMA 3 ??? QUÉ SALDRÁ EN LA CONSOLA A CONTINUACIÓN
console.log(numero1 > numero2);
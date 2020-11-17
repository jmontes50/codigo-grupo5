/**
 * Algoritmo que imprime los 50 primeros números pares
 */
////// for (let i = 0; i < 100; i = i + 2) {
//////   console.log(`Valor de i = ${i}`);
////// }

/**
 * Algoritmo que imprimime los múltiplos de 5
 * entre los números 0 y 100
 */

////// for (let i = 0; i < 100; i++) {
//////   if (i % 5 === 0) {
//////     console.log(`Multiplo de 5 = ${i}`);
//////   }
////// }

/**
 * Imprimir la sumatorio de los 20 primeros números
 * a partir del 0
 */

////// let suma = 0;
////// for (let i = 0; i < 20; i++) {
//////   suma = suma + i;
////// }
////// console.log(suma);

/**
 * Algoritmo que imprime el factorial de un número
 * n (ejemplo, del número 6)
 */
////// let factorial = 1;
////// let numero = 8;
////// for (let i = 1; i <= numero; i++) {
//////   factorial = factorial * i;
////// }
////// console.log(`Factorial de ${numero} = ${factorial}`);

/**
 * Algoritmo para calcular la multiplicación
 * de 2 números sin usar el operador ( * asterisco)
 */
////// let a = 9;
////// let b = 4;
////// let suma = 0;
////// for (let i = 0; i < a; i++) {
//////   suma = suma + b;
////// }
////// console.log(suma);


// Ciclo While
/**
 * Mientras que i sea menor que 30, imprimiremos los múltiplos
 * de 10
 */
////// let i = 0;
////// while (i < 30) {
//////   if (i % 10 === 0) {
//////     console.log(`Multiplo de 10 = ${i}`);
//////   }
//////   i++;
////// }
/**
 * ¿Cuándo se usa while?
 * Por lo general, cuando no sabemos cuántas vueltas
 * tenemos que iterar o repetir el código
 */
/**
 * Algoritmo para recibir n notas (no sé cuántas notas)
 * La única forma de registrar el fin del ingreso de notas
 * será colocando el valor de -1
 * Ejm: * 15 20 05 07 09 -1
 * En ejemplo, se calculará el promedio de las 5 primeras notas.
 */
////// let suma = 0;
////// let nota = 0;
////// let contador = 0;
////// // debugger;
////// while (nota !== -1) {
//////   nota = +prompt("Ingresa una nueva nota o ingresa -1 para terminar");
//////   if (nota !== -1) {
//////     suma = suma + nota;
//////     contador = contador + 1;
//////   } else {
//////     console.log(`Nro de notas ingresadas: ${contador}`);
//////     console.log(`Promedio de notas = ${suma / contador}`);
//////   }
////// }

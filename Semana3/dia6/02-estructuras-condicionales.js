/**
 * ESTRUCTURAS CONDICIONALES
 */
/**
 * Categorizando sueldos
 */
////// let sueldo = 4200.0;
////// if (sueldo > 5000) {
//////   console.log(`${sueldo} soles = Categoría Administrativo`);
////// } else {
//////   console.log(`${sueldo} soles = Categoría Operativo`);
////// }

/**
 * No todos los if's necesitan un else
 */
////// let precio = 600.0;
////// let descuento = 0;
//////
////// if (precio > 900) {
//////   descuento = precio * 0.1;
////// }
////// console.log(`Precio Final: ${precio - descuento} soles`);

/**
 * Comparadores ariméticos
 * > mayor que
 * < menor que
 * >= mayor ó igual que
 * <= menor ó igual que
 * !== diferente que
 * === igual en valor y en tipo de dato(recomendado)
 * == igual en valor sin importar el tipo de dato(no recomendado)
 */

/**
 * Si la edad es mayor a 18 años Y el año de emisión del DNI
 * es menor 2020 => tiene bono mi chamo
 *
 */
/////// let edad = 29;
/////// let anioEmisionDni = 1991;
///////
/////// if (edad > 18) {
///////   if (anioEmisionDni < 2000) {
///////     console.log("Sí hay bono mi chamo");
///////   } else {
///////     console.log("No hay bono chamito. ");
///////     console.log(
///////       `Es mayor de edad pero su DNI fue emitido en el año ${anioEmisionDni}`
///////     );
///////   }
/////// } else {
///////   console.log("No hay bono porque no es usted mayor de edad");
/////// }

/**
 * Calcular si un año ingresado es bisiesto
 *
 * Teoría.
 * Los años bisiestos son divisibles entre 4 pero NO entre 100
 * Por otro lado, si son divisibles entre 400 también son bisiestos
 */

////// let anio = 1991;
////// if (anio % 400 === 0) {
//////   console.log("SI ES BISIESTO");
////// } else {
//////   if (anio % 4 === 0) {
//////     if (anio % 100 !== 0) {
//////       console.log("SI ES BISIESTO");
//////     } else {
//////       console.log("NO ES BISIESTO");
//////     }
//////   } else {
//////     console.log("NO ES BISIESTO");
//////   }
////// }

/**
 * Ejercicio 3.4 página 89
 * Ejemplos:
 * 2 horas => S/ 10.00
 * 4 horas => S/ 18.00
 * 8 horas => S/ 31.00
 *
 */

let h = 1;
let total = 0;
if (h <= 2) {
  total = h * 5;
} else {
  if (h <= 5) {
    total = 10 + (h - 2) * 4;
    debugger;
  } else {
    if (h <= 10) {
      total = 22 + (h - 5) * 3;
    } else {
      total = 10 + 12 + 15 + (h - 10) * 2;
    }
  }
}
console.log(total);

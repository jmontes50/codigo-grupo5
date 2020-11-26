/**
 * La clase Math nos provee funciones matemáticas
 * Es una clase estática.
 * Significa que no debo crear objetos de esa clase
 * para utilizar sun funciones, sino, hacer referencia
 * directamente a la clase
 */

/**
 * Math.sqrt(numero)
 * Devuelve la raíz cuadrada de un número
 */
console.log(`Raíz cuadrada de 64 = ` + Math.sqrt(64));

/**
 * Math.random()
 * retorna un número aleatorio entre 0 y 1
 */
console.log(Math.random());
/**
 * Obtener un número aleatorio entre min y max
 * Math.random() * (max - min) + min
 */

console.log(`Random entre 15 y 79 ${Math.random() * (79 - 15) + 15}`);

/**
 * Función que retorna el TECHO de un núnmero con coma decimal
 * ejm: 4.1 = 5
 * ejm: 4.2 = 5
 * ejm: 28.00005 = 29
 * Math.ceil(numero);
 */

/**
 * Función que retorna el PISO de un número con coma decimal
 * Math.floor(numero)
 * ejm: 4.9 = 4
 * ejm: 101.99997 = 101
 * ejm: 1.8 = 1
 */

/**
 * Función que redondea un número
 * Math.round(número)
 */
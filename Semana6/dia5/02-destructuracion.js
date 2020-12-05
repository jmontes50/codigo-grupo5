/**
 * Destructuración de Arreglos
 */

let numeros = [10, 15, 1, -8, 95, 78, 52, 146];
let [n1, n2, ...elResto] = numeros;
console.log(n1 + n2);
console.log(elResto);

/**
 * Ejemplo
 */

const obtenerCoordenadas = (ciudad) => {
  /**
   * Supuestamente busca en una base de datos
   * las coordenadas (latitud y longitud) de la ciudad
   * recibida
   */
  return [-16.25152, -75.121321];
}

let [lat, lon] = obtenerCoordenadas("Puno");
console.log(`Latidud ${lat}`);
console.log(`Logitud ${lon}`);

/**
 * array.map((elemento,i,copia_del_arreglo)=>{})
 * Caractersística de map
 * En todas las iteraciones se debe retornar el mismo elemento 
 * o uno diferente ya que a partir de la función map, se obtiene 
 * un nuevo arreglo con todos esos elementos retornados.
 */
const usuarios = ["Daniela", "Dayana", "Mariel", "Kike", "Rubi"]
const nuevosUsuarios = usuarios.map((usuario) => {
  return usuario;
})
console.log(nuevosUsuarios);

console.log("//////////////");


/**del siguiente arreglo,
 * retornar el doble de los números pares 
 * y la mitad de los números impares
 */
const numeros = [15, 12, 46, 5, 50, 99, 10, 50];
const resultados = numeros.map(function (numero) {
  if (numero % 2 === 0) {
    return numero * 2;
  } else {
    return numero / 2;
  }
})

console.log(resultados);
////////////////////////
/**
 * OJO: La función map, no es capaz de discriminar
 * a ningún elemento, la cantidad de elementos
 * que retorna, siempre es la misma cantidad del arreglo original
 * Así que, considerar retornar todos los elementos de todas
 * formas(modificados o no modificados)
 */
const dobleDePares = numeros.map(function (numero) {
  if (numero % 2 === 0) {
    return numero * 2;
  } else {
    return numero;
  }
})
console.log(dobleDePares);
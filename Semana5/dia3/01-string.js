let frase = "CodiGo bootcamp de desarrollo web";
/**
 * string.length
 * Retorna la cantida de caracteres de la cadena de texto
 */

console.log(frase);
console.log("Caracteres:" + frase.length);

/**
 * Los strings pueden ser tratados como un arreglo
 */
// Imprimir el caracter de la posición 5
console.log(frase[5]);

for (let i = 0; i < frase.length; i++) {
  console.log(frase[i]);
}

/**
 * string.indexOf("subcadena o caracter", ?desde_qué_posición)
 * Busca la posición en la que aparezca un caracter ó una
 * cadena de texto pasada como parámetro a la función indexOf.
 * Opcionalmente pueden mandar un segundo parámetro indicando 
 * desde qué posición desean buscar el caracter o la subcadena.
 * Posibles repuestas:
 * -1 cuando no encuentra el texto buscado
 * >0 cuando encuentra el texto buscado
 */
/**
 * Vamos a buscar la palabra "Go"
 */
console.log(`Posición de "Go": ` + frase.indexOf("Go"));

/**
 * string.toLowerCase()
 * Devuelve una copia del string convertido todo a minúscula.
 * string.toUpperCase()
 * Devuelve una copia del string convertido todo a mayúscula.
 * OJO: No convierte el string original
 */

console.log(frase.toLowerCase());
console.log(frase.toUpperCase());


const titulo = "Once Upon a Snowman";
let posicionSnow = (titulo.toLowerCase().indexOf("snow"))
console.log(posicionSnow);


/**
 * string.split("separador")
 * retorna un arreglo de strings que han sido 
 * separadas tomando como referencia o como patrón
 * al "separador"
 */

let palabras = frase.split(" ");
console.log(palabras);
console.log(`cantidad de palabras de frase = ${palabras.length}`);


/**
 * Eliminando monosílabos
 */
let sinopsis = "Enola Holmes, una intrépida joven que busca a su madre, utiliza su brillante instinto investigador para superar a su hermano Sherlock y ayudar a un lord en su fuga"

let arreglo = sinopsis.split(" ");
arreglo = arreglo.filter((word) => {
  if (word.length > 3) {
    return word;
  }
})

/**
 * string.substring(inicio,?fin)
 * Retorna una subcadena desde la posición "inicio" hasta la posición
 * "fin",
 * OJO; si no se proporciona el "fin", se tomarará hasta el final de la
 * cadena
 */
console.log(frase.substring(20, 25));
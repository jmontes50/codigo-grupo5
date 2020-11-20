/**
 * break;
 * -En una estructura repetitiva, sirve para detener
 *  el ciclo y saltarse todos los ciclos o iteraciones que
 *  quedaban por dar
 * -romper y finalizar un ciclo
 */

let nombres = ["jorge", "samanta", "dayana", "dennis", "brunela", "paty"];
/**
 * Indicar o imprimir, la posición en el que "dennis" se encuentra
 * Asumir que no se repiten los nombres
 */

for (let i = 0; i < nombres.length; i++) {
  if (nombres[i] === "dennis") {
    console.log(i);
    break;
  }
}

/**
 * continue;
 * Sirve para saltarse la iteración en la que se encuentra
 * es decir, todo el código que quedaba por ejecutarse en
 * una determinada iteración, se va a omitir, y se pasará 
 * a la siguiente iteración.
 */

let numerosBinarios = [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1];
/**
 * del arreglo numerosBinarios, imprimir solamente
 * los 0(ceros)
 */
for (let i = 0; i < numerosBinarios.length; i++) {
  if (numerosBinarios[i] === 1) {
    continue;
  }
  console.log(numerosBinarios[i]);
}


/**
 * document.createElement("nombreDeLaEtiqueta")
 * Retorna un elemento HTML que NO está presente aún en el DOM
 */
/**
 * element.appenChild(otroElemento)
 * Inyecta un elemento dentro de otro al final de la lista de elementos
 * hijos
 */
/**
 * element.prepend(otroElemento)
 * Inyecta un elemento dentro de otro al inicio de la lista de elementos
 * hijos, es decir como primer elemento
 */

let body = document.querySelector("body");
let h1 = document.createElement("h1");
h1.innerText = "El título de la APP";

body.prepend(h1);

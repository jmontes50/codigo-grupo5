/**
 * document proporciona la capacidad de:
 * Manipular al dom, encontrar elementos,
 * crear elementos, etc.
 */

/**
 * document.getElementById("id_de_un_elemento")
 */
let titulo = document.getElementById("titulo");
titulo.innerText = "Nuevo Titulo";
titulo.style.backgroundColor = "#eee";
titulo.style.color = "#444";

/**
 * document.getElementsByClassName("classname")
 */

let lis = document.getElementsByClassName("lista__item");
/**
 * OJO: Artificio para convertir un elemento
 * que tiene la forma de un arreglo, pero no 
 * es del tipo de dato Array, en ésta caso
 * es HTMLCollection
 */
/**
 * Array.from(<objeto_iterable>) Retorna un arreglo
 * genuino a partir del pseudoarreglo
 */
let arreglo = Array.from(lis);
console.log(arreglo);
arreglo.forEach((li, i) => {
  li.innerText = `List item ${i}`;
})

/**
 * document.querySelector("");
 * Retorna un (01) elemento HTML que coincida con el
 * patrón de selección como si fuera mediante CSS
 */

let subtitulo = document.querySelector("#subtitulo");
subtitulo.style.textDecoration = "underline";

/**
 * document.querySelectorAll("");
 * Retorna una colección de elementos HTML que coincida
 * con el patrón de selecicón como si fuera mediante CSS
 */

let cajitas = document.querySelectorAll(".cajita");
cajitas = Array.from(cajitas);
cajitas.forEach((caja) => {
  caja.style.height = "20px";
  caja.style.width = "20px";
  caja.style.backgroundColor = "#444";
  caja.style.borderRadius = "50%";
})
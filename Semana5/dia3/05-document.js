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
arreglo.forEach((li) => {
  console.log(li);
})
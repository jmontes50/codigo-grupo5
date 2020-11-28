let btnAlerta = document.getElementById("btnAlerta");
let btnEvento = document.getElementById("btnEvento");
let divCirculo = document.getElementById("divCirculo");
let linkGoogle = document.getElementById("linkGoogle");/**
 * @type {Array<HTMLElement>}
 */
let lis = document.querySelectorAll("ul > li");

/**
 * FORMAS DE ASOCIAR EVENTOS
 * Forma 1
 * element.addEventListener("evento",function(e){});
 * Forma 2
 * element.on[evento] = function(e){}
 * 
 * OJO: la palabra "evento" se reemplaza con el nombre del evento que queremos asociar
 * 
 * [https://developer.mozilla.org/es/docs/Web/Events]
 * 
 */

btnAlerta.addEventListener("click", function (e) {
  alert("Hey! alguien hizo click en el botón Alerta!");
})

btnEvento.onclick = function (e) {
  /**
   * El parámertr "e" es un objeto que tiene toda la información del 
   * evento que se ha desencadenado
   */
  console.log("Click en el botón evento");
  console.log(e);
}


lis = Array.from(lis);
/**
 * Iteramos el arreglo de elementos li
 */
lis.forEach((li) => {
  /**
   * Con cada elemento li, vamos a asociar un 
   * evento "click"
   */
  li.onclick = (e) => {
    /**
     * el evento "e", es un parámetro que tiene
     * toda la información de un evento.
     * e.target hace referencia al elemento html (HTMLElement) en
     * el que ocurre el evento
     */
    console.log(e.target.innerText);
    console.log("Se hizo en un LI");
  }
})


/**
 * Evento que se ejecuta cuando un usuario le hace doble click a un elemento
 * element.ondblclick = (e)=>{}
 */

divCirculo.ondblclick = (e) => {
  // cada vez que se le dé doble click en el circulo, cambie a un color, completamente
  // aleatorio
  let random255 = () => {
    return Math.random() * 255
  }
  divCirculo.style.backgroundColor = `rgb(${random255()},${random255()},${random255()})`;
}


/**
 * Eventos por defecto,
 * Existen elemento que ya tienen preconfigurados ciertos comportamientos
 * que responden a algunos eventos.
 * Por ejemplo,  la etiquet <a></a> que cuando se le hace CLICK
 * navegamos a una nueva página definida por su atributo href=""
 * NOTA: Estos eventos se pueden detener para darles un nuevo comportamiento
 */

linkGoogle.onclick = (e) => {
  /**
   * e.preventDefault() 
   * es una función que interrumpe cualquier suceso pre-programado en cualquier evento
   */
  e.preventDefault();
  console.log("asaskdjaksjdn");
}
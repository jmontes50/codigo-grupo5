let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let ulJugadores = document.getElementById("listaJugadores");
let btnRegistro = document.getElementById("btnRegistro");
let producto1 = document.getElementById("producto1");
let imagen = document.getElementById("imagen");
/**
 * element.innerText = "texto interno";
 * Define el texto interno de una etiqueta
 * 
 * elmenet.innerHTML = "texto ó código html";
 * Define el texto ó renderiza un código html
 * dentro de un elemento
 */

titulo.innerText = "Titulo en <strong>Negrita</strong>";
subtitulo.innerHTML = "Subtitulo en <em>Negrita</em>";

const jugadores = ["Maradona", "Cueva", "Manco", "Cuto", "Chiquito"];
/**
 * Reto: Llenar con <li></li>
 * cada jugador del arreglo en la listaJugadores en el HTML
 * HINT: recuerden que lo que recibe un innerHTML, no
 * es otra cosa que un STRING
 * por otro lado, no olviden que un STRING se concatena con
 * otro con la suma de strings +""+"" */

let stringLis = "";
jugadores.forEach((jugador) => {
  stringLis = stringLis + `<li>${jugador}</li>`;
})
ulJugadores.innerHTML = stringLis;

/**
 * element.style.[estiloCssEnCamelCase]
 */

ulJugadores.style.listStyle = "none";

/**
 * element.classList
 * retorna un arreglo de strings con las clases que tenga
 * el elemento
 *
 * element.classList.add("nombreDeClaseAAgregar")
 * Agrega una clase nueva a las clases que ya tenía
 * previamente un elemento
 *
 * element.classList.remove("nombreDeClaseAEliminar")
 * Elimina o quita una clase a un elemento
 *
 * element.classList.toggle("nombreDeClaseInterruptor")
 * Agrega o Quita una clase del elemento y funciona
 * como un interruptor, es decir, si no tiene la clase, la agrega
 * y si tiene la clase, la elimina
 */

console.log(btnRegistro.classList);

setInterval(() => {
  btnRegistro.classList.toggle("pressed");
}, 500);


/**
 *  element.setAttribute("nombreDeAtributo","ValorDeAtributo");
 * Agrega un atributo HTML a una etiqueta con un determinado valor
 * El  atributo puede o no ser un atributo oficial
 * Ejm:
 * src => "Atributo oficial de una etiqueta <img>"
 * href => "Aitributo oficial de una etiqutea <a>"
 * id-usuario => "Atributo no oficial de cualquier etiqueta"
 */

producto1.setAttribute("producto-id", "1562");

const urls = [
  "http://placehold.it/300x300/444444/bbbbbb?text=logo1 - 300x300",
  "http://placehold.it/300x300/888888/bbbbbb?text=logo2 - 300x300",
  "http://placehold.it/300x300/000000/bbbbbb?text=logo3 - 300x300",
  "http://placehold.it/300x300/444444/55bbbb?text=logo4 - 300x300",
  "http://placehold.it/300x300/dddddd/bbbbbb?text=logo5 - 300x300",
  "http://placehold.it/300x300/4444ff/bbbbbb?text=logo6 - 300x300",
  "http://placehold.it/300x300/44dd44/bbbbbb?text=logo7 - 300x300",
  "http://placehold.it/300x300/dd4444/bbbbbb?text=logo8 - 300x300",
  "http://placehold.it/300x300/440088/bbbbbb?text=logo9 - 300x300",
];
/**
 * cada segundo, debe cargarse una imagen aleatoria del arreglo
 * de imágenes en el elemento que lleva por id imagen
 */

setInterval(() => {

  let aleatorio = Math.random() * ((urls.length - 1) - 0) + 0
  aleatorio = Math.floor(aleatorio);
  imagen.setAttribute("src", urls[aleatorio]);

}, 1000);

//¿Cuándo usar setAttribute?
// Es preferible usarlo cuando el atributo no es un 
// atributo oficial
// ¿Por qué?
// porque los atributos que son oficiales en un elemento
// pueden settearse directamente
// EJM:
// unaImagen.src = "";
// unaTabla.border = "2";
// unTd.colspan = "4";
// unInput.value = "";

/**
 * window es un objeto que es creado automáticamente por
 * el navegador
 * éste objeto tiene las propiedades para manipular al dom y obtener
 * información acerca del navegador y la página en la que nos
 * encontramos
 */

/**
 * Principales propiedades
 * window.document => objeto que sirve para manipular al DOM
 * window.innerWidth => retorna el valor del ancho de la ventana en pixeles
 * window.innerHeight => retorna el valor del alto de la ventana en pixeles
 */

console.log(window.innerWidth + " ancho en pixeles");
console.log(window.innerHeight + " alto en pixeles");
console.log(window.document);
/**
 * Es posible colocar cualquier atributo o función de "window",
 * sin referenciar a "window" necesriamente
 * Ejm: podemos usar "innerWidth solamente"
 */
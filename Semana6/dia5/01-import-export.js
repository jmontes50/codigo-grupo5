/**
 * Forma 1  importando variables (funciones, arreglos, etc etc)
 * que han sido exportados del archivo "peliculas.js"
 */
// import { peliculas, servidor } from "./peliculas.js";

/**
 * Forma 2 importando tooooodoo lo que el archivo "peliculas.js" esté 
 * exportando.
 * Todo lo exportado llega en un objeto llamado "utilidades"
 */
import * as utilidades from "./peliculas.js";


import generosJS from "./generos.js";

console.log(utilidades.peliculas);
console.log(utilidades.servidor);
console.log(generosJS.generos);
console.log(generosJS.generoFavorito);
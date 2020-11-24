/**
 * Los constructores son creadores de objetos
 * previamente definidos
 */

function Curso(_nombre = "", _nivel = "", _duracion = "", _precio = 0, _temas = []) {
  let objCurso = {
    nombre: _nombre,
    nivel: _nivel,
    nombreCompleto: function () {
      return "Curso de " + this.nombre + " - " + this.nivel
    },
    duracion: _duracion,
    precio: _precio,
    temas: _temas
  }
  return objCurso;
}

let objReact = new Curso();
let objNextJS = new Curso();

objReact.nombre = "ReactJS";
objReact.duracion = "2 semanas";
objReact.nivel = "Avanzado";
console.log(objReact.nombreCompleto());


objNextJS.temas = ["SSR", "Default Props"];
objNextJS.temas.push("Libraries");


console.log(objReact);
console.log(objNextJS);

let objKotlin = new Curso("Kotlin", "Básico");

console.log(objKotlin);
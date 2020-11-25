/**
 * Reto1: Crear un constructor (Clase) de nombre Alumno
 * Atributos de cada alumno serán:
 * > nombres: <string>
 * > apellidos: <string>
 * > notas: Array<number>
 * > dni: <string>
 * > promedioNotas: Function => función que calculará
 *   el promedio de todas las notas que tenga un alumno y
 *   retornará dicho promedio
 * OBS: el constructor, debe recibir todos los parámetros
 */

/**
 * Ivan version 😁
 */

// function Alumno(_nombres = "", _apellidos = "", _notas = [], _dni = "") {
//   let objAlumno = {
//     nombres: _nombres,
//     apellidos: _apellidos,
//     notas: _notas,
//     dni: _dni,
//     promedioNotas: function () {
//       let promedio = 0;
//       let sumatoria = 0;
//       this.notas.forEach((nota) => {
//         sumatoria += nota;
//       })
//       promedio = sumatoria / objAlumno.notas.length;
//       return promedio;
//     }
//   }
//   return objAlumno;
// }

/**
 * Kevin version 😄
 */
function Alumno(_nombres = "", _apellidos = "", _notas = [], _dni = "") {
  let objAlumno = {
    nombres: _nombres,
    apellidos: _apellidos,
    notas: _notas,
    dni: _dni,
    promedioNotas: function () {
      let suma = 0;
      this.notas.forEach((elemento) => {
        suma += elemento;
      });
      return suma / this.notas.length;
    },
  };
  return objAlumno;
}

/**
 * Diego Pacheco version 🤡
 */

// function Alumno(_nombre = "", _apellido = "", _notas = [], _dni = "") {
//   let objAlumno = {
//     nombre: _nombre,
//     apellido: _apellido,
//     notas: _notas,
//     dni: _dni,
//     promedioNotas: function () {
//       let total = 0;
//       for (let i = 0; i < this.notas.lenght; i++) {
//         total += this.notas[i];
//       }
//       return total / this.notas.lenght;
//     }
//   }
//   return objAlumno;
// }


// let alumnos = [];

/**
 * Reto2: Hacer un algoritmo para ingresar los datos
 * de N alumnos con X notas cada uno,
 * Los datos deben ser ingresados por el usuario y agregados al arreglo,
 * alumnos.
 *
 * Al final de ingresar los N alumnos, se debe mostrar el promedio de
 * notas de cada alumno y luego imprimir a todos los alumnos por consola.
 */

/**
 * 1. Leer la cantidad de alumnos a ingresar
 * 2. Leer la cantidad de notas por alumno a ingresar
 * 3. Iterar la cantidad de alumnos que el usuario va a ingresar
 *  y en cada vuelta, pedir los datos del alumno incluidas las notas
 * 4. Adicionalmente, en cada vuelta agregar el alumno ingresado al
 *   arreglo de alumnos.
 * 5.Luego de ingresar a todos los alumnos, iterar nuevamente le arreglo
 * de alumnos para imprimir el promedio de cada uno de ellos en cada
 * iteración.
 * 6. Finalmente, acabadas las iteraciones, imprimir el arreglo de alumnos
 */


/**
 * Ivan version 😀
 */
// let alumno = [];
// let numAlumnos = +prompt("Ingresar el numero de alumno que desea ingresar :");
// for (let i = 0; i < numAlumnos; i++) {
//   let nombre = prompt("Ingrese el nombre del alumno:" + (i + 1));
//   let apellidos = prompt("Ingresar el apellidos del alumno :" + (i + 1));
//   let dni = prompt("Ingresar el dni del alumno :" + (i + 1));
//   let notas = [];
//   let numNotas = +prompt("Ingresar el numero de notas a ingresa :" + (i + 1));
//   for (let j = 0; j < numNotas; j++) {
//     let Nota = +prompt("Ingresar la nota => :" + (j + 1) + " del alumno : " + nombre + " - " + apellidos);
//     notas.push(Nota);
//   }
//   let eleAlumno = new Alumno(nombre, apellidos, notas, dni);
//   alumno.push(eleAlumno);
// }

// alumno.forEach((alumn) => {
//   console.log(alumn.promedioNotas());
// })

/**
 * Alenjadría version 😄
 */
// let Alumnos = [];
// let numeroAlumnos = +prompt("Ingrese el número de alumnos :");
// let cantidadNotas = +prompt("Ingrese la cantidad de notas por alumno :");
// for (let i = 0; i < numeroAlumnos; i++) {
//   let notas = [];
//   let nombres = prompt(`Ingrese los nombres del alumno ${i + 1} :`);
//   let apellidos = prompt(`Ingrese los apellidos del alumno ${i + 1} :`);
//   let dni = prompt(`Ingrese el dni del alumno ${i + 1} :`);
//   for (let j = 0; j < cantidadNotas; j++) {
//     notas.push(+prompt(`Ingrese la nota ${j + 1} del alumno ${i + 1} :`));
//   }
//   Alumnos.push(new Alumno(nombres, apellidos, dni, notas));
// }

// Alumnos.forEach(alumno => {
//   console.log(alumno.promedioNotas());
// });

// console.log(Alumnos);

/**
 * Rubén Cardenas version 😃
 */

// let nalumnos = +prompt("Ingrese Nro de Alumno");
// let nnotas = +prompt("Ingrese Nro de Notas");
// for (let i = 0; i < nalumnos; i++) {
//   let nombres = prompt("Ingrese Alumno");
//   let notas = [];
//   for (let j = 0; j < nnotas; j++) {
//     let nota = +prompt("Ingrese Notas");
//     notas[i] = nota;
//   }
//   Alumno(nombres, notas);
// }

/**
 * Diego Pacheco version 😲
 */

// let n_alumnos = +prompt("Ingrese cantidad de alumnnos");
// let n_notas = +prompt("Ingrese cantidad de notas");
// let alumnos = [];
// for (let i = 0; i < n_alumnos; i++) {
//   //solicitar datos
//   let nombre = prompt("Nombre del alumno" + (i + 1));
//   let apellido = prompt("Apellido del alumno" + (i + 1));
//   let dni = prompt("Ingresar DNI del alumno" + (i + 1))

//   //ingresar notas
//   let notas = []
//   for (let j = 0; j < n_notas; j++) {
//     notas.push(+prompt("Ingresa la nota N° " + (j + 1)));
//   }
//   //ingresar datos a cada objeto alumno
//   alumnos.push(new Alumno(nombre, apellido, notas, dni));
// }
// //Imprimir el promedio de notas de cada alumno
// for (let i = 0; i < alumnos.length; i++) {
//   console.log("El promedio de alumno" + alumnos[i].nombre + "es: " + alumnos[i].promedioNotas());
// }
// //Imprimir el arreglo de alumnos
// console.log(alumnos);




function alumno(_notas = []) {
  let objAlumno = {
    nombre: "",
    apellido: "",
    notas: _notas,
    dni: "",
    promedioNotas: function () {
      let suma = 0;
      let nota = 0;
      let promedio = 0;
      for (let i = 0; i < this.notas.length; i++) {
        nota = this.notas[i];
        suma = suma + nota;
      }
      promedio = suma / this.notas.length;
      return promedio;
    }
  }
  return objAlumno;
}
let objJuan = new alumno();
objJuan.nombre = "Juan";
objJuan.apellido = "perez";
objJuan.dni = "98765432";
objJuan.notas = [10, 5, 15, 24];
console.log(objJuan.promedioNotas());
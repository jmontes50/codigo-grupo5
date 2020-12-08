/**
 * Una promesa es una estructura que nos ayuda a esperar
 * un resultado tras la ejecución de una función asíncrona
 */
/**
 * Función que recibe un número de DNI
 * y retorna una PROMESA que contiene el usuario encontrado
 */
const buscarPorDni = (dni) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Jorge Garnica Blanco");
    }, 2000);
  })
};

console.log("ALGO AQUI 1");

buscarPorDni("48754512").then((nombre) => {
  console.log(nombre);
  document.getElementById("resultado").innerText = nombre;
});

console.log("ALGO AQUI 2");
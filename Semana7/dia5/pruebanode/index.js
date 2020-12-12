import { getUsuario } from "./servicios.js";
console.log("Mi primer archivo de NODE");

console.log("Adiós!");

getUsuario().then((data) => {
  console.log(data);
})
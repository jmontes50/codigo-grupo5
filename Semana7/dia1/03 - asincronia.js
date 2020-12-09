const saludo = () => {
  console.log("Imprimiendo saludo");
}


console.log("Hola");

setTimeout(() => {
  console.log("Asincrono 2 seg.");
}, 2000)

console.log("Como estás");

saludo();

setTimeout(() => {
  console.log("Asincrono 3 seg.");
}, 3000)

console.log("Hasta Pronto joven");

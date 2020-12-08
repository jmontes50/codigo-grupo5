// Regla 1
// Si una función tiene una sóla línea de ejecución y retorno,
// se pueden omitir las llaves y también la palabra "return"

const cubo = (numero) => numero * numero * numero;

console.log(cubo(5));

// Regla 2
// Cuando una función recibe 1 sólo parametro,
// se puede omitir el símbolo de paréntesis

const buscarPorDni = dni => console.log(`Encontrado ${dni}`);

buscarPorDni("78451245");

// Regla 3
// Formas reducidas de hacer map, filter y find, 

let numeros = [4, 5, 2, 58, 1, 2, 15, 98];

// Forma trdicional
// let pares = numeros.filter(num => {
//   if (num % 2 === 0) {
//     return num;
//   }
// })
// console.log(pares);
// Forma Corta
let pares = numeros.filter(num => num % 2 === 0);
console.log(pares);
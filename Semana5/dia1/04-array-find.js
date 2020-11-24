/**
 * array.find((elemento, i, copia)=>{})
 * find retorna un (01) sólo elemento que coincida
 * con una condición de búsqueda para los elemento
 * del arreglo.
 * Y encontrado el elemento, éste es retornado.
 * En caso nunca se encuentre el elemento o la condición
 * el retorno será undefined
 */

const dnis = ["10203040", "51542132", "79784565", "51240254", "01245878"];
// buscando el dni = 51542132
const encontrado = dnis.find((dni) => {
  if (dni === "51542000") {
    return dni;
  }
})

encontrado ? console.log(encontrado) : console.log("nay");
// indexOf devuelve la posición en la que un elemento
// se encuentra dentro de un arreglo. Opcionalmenete,
// recibe un segundo parámetro que indica la posición a partir
// de dónde buscar al elemento
// console.log(dnis.indexOf("51542132", 5));
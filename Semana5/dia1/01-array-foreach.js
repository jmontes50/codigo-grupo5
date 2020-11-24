const notas = [12, 02, 09, 10.5, 11, 07, 05];
/**
 * array.forEach((elemento, i, copia_del_arreglo)=>{})
 * 
 */

notas.forEach((elemento, i) => {
  console.log(elemento);
  console.log(i);
  console.log("impresión");
});

console.log("//////////");

const facturas = [123.5, 4500, 2000, 123, 1025];
facturas.forEach((factura, i) => {
  console.log(`Factura => ${factura}`);
  console.log(`Posición => ${i}`);
});
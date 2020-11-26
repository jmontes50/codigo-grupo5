let hoy = new Date();
console.log(hoy);
/**
 * date.getFullYear() retorna el año de la fecha
 */

console.log(`Año: ${hoy.getFullYear()}`);
/**
 * date.getMonth() retorna el número de mes de la fecha
 * OJO: Teniendo en cuenta que ENERO es 0
 */
console.log(`Mes: ${hoy.getMonth()}`);

/**
 * date.getDate()
 * retorna el número del día del mes
 */
console.log(`Día: ${hoy.getDate()}`);

/**
 * date.getDay()
 * retorna el día de la semana donde 
 * Domingo = 0
 */
console.log(`Día de semana:${hoy.getDay()}`);
/**
 * date.getHours();
 * date.getMinutes();
 * date.getSeconds();
 * date.getMilliseconds();
 */

let navidad = new Date(2020, 11, 25);
let navidadMenosHoy = navidad - hoy;
/**
 * restar fecha devuelve la cantidad de millisegundos
 * que hay entre fecha y fecha
 */
let diasParaNavidad = (((navidadMenosHoy / 1000) / 60) / 60) / 24;

console.log(`${diasParaNavidad.toFixed(2)} días para navidad`);


/**
 * setInterval ejecuta una función cada N milisegundos
 * Sobre el siguiente algoritmo, mostrar la cantidad de:
 * DIAS, HORAS, MINUTOS Y SEGUNDOS PARA LA NAVIDAD
 * HINT: Usar módulos para los días horas, mobnutos y segundos
 * módulo = % 
 */
setInterval(() => {
  let fechaActual = new Date();
  let navidad = new Date(2020, 11, 25, 0, 0, 0);
  let navidadMenosHoy = navidad - hoy;
  let segundos = (navidad - fechaActual) / 1000;
  let dias = segundos / 86400;
  segundos = segundos % 86400;
  let horas = segundos / 3600;
  segundos = segundos % 3600;
  let minutos = segundos / 60;
  segundos = segundos % 60;

  console.log(`Quedan ${segundos.toFixed(2)} segundos , ${minutos.toFixed(2)} minutos , ${horas.toFixed(2)} horas , ${dias.toFixed(2)} dias para que venga San Ricolas`);
}, 1000);
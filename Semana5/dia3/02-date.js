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
/**
 * FRANCO VERSION 😀
 */
// setInterval(() => {
//   let hoy = new Date();
//   let navidad = new Date(2020, 11, 25, 0, 0, 0);
//   let dias = (navidad - hoy) / (1000 * 60 * 60 * 24);
//   dias = Math.floor(dias);
//   let horas = (navidad - hoy) / (1000 * 60 * 60);
//   horas = Math.floor(horas - (dias * 24));
//   let minutos = (navidad - hoy) / (1000 * 60);
//   minutos = Math.floor(minutos - (horas * 60) - (dias * 24 * 60));
//   let segundos = (navidad - hoy) / (1000);
//   segundos = Math.floor(segundos - ((minutos * 60) + (horas * 60 * 60) + (dias * 24 * 60 * 60)));
//   console.log(`${dias} dias; ${horas} horas; ${minutos} minutos; ${segundos} segundos`);
// }, 1000)

/**
 * Kevin version 😁
 */
// setInterval(() => {
//   let fechaActual = new Date();
//   let navidad = new Date(2020, 11, 25, 0, 0, 0);
//   let duracion = navidad - fechaActual;
//   let milisegundos = 1000;
//   let msMinuto = milisegundos * 60;
//   let msHora = msMinuto * 60;
//   let msDia = msHora * 24;
//   let diasRestantes = Math.floor(duracion / msDia);
//   let horasRestantes = Math.floor((duracion % msDia) / msHora);
//   let minutosRestantes = Math.floor((duracion % msHora) / msMinuto);
//   let segundosRestantes = Math.floor((duracion % msMinuto) / milisegundos);
//   // console.log(dias);
//   console.log(
//     `Quedan ${diasRestantes} dias ${horasRestantes} horas ${minutosRestantes} minutos ${segundosRestantes}  segundos para Navidad`
//   );
// }, 1000);

/**
 * Diego Pacheco Version 😉
 */

// setInterval(() => {
//   let fechaActual = new Date();
//   let navidad = new Date(2020, 11, 25, 0, 0, 0);
//   tiempoFaltante = (navidad - fechaActual) / 1000;
//   let dias = Math.floor(tiempoFaltante / (24 * 3600));
//   let horas = Math.floor((tiempoFaltante / 3600) - dias * 24);
//   let minutos = Math.floor(tiempoFaltante / 60 - (dias * 24 * 60) - (horas * 60));
//   let segundos = (tiempoFaltante - (dias * 24 * 3600) - (horas * 3600) - (minutos * 60)).toFixed(0);

//   console.log(`${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`);
// }, 1000);
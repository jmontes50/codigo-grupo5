const formRegistro = document.getElementById("formRegistro");
const inputPlaca = document.getElementById("inputPlaca");
const selectColor = document.getElementById("selectColor");
const radioNuevo = document.getElementById("radioNuevo");
const radioUsado = document.getElementById("radioUsado");
/**
 * onsubmit => evento que se dispara cuando
 * se envía el formulario
 */
formRegistro.onsubmit = (e) => {
  e.preventDefault();
  let placa = inputPlaca.value;
  let color = selectColor.value;
  let estado = radioNuevo.checked === true ? "nuevo" : "usado";

}
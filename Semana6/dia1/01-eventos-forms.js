const formRegistro = document.getElementById("formRegistro");
const inputPlaca = document.getElementById("inputPlaca");
const selectColor = document.getElementById("selectColor");
const radioNuevo = document.getElementById("radioNuevo");
const radioUsado = document.getElementById("radioUsado");
const textObs = document.getElementById("textObs");


const resetearFormulario = () => {
  formRegistro.reset();
  textObs.value = "Sin observaciones";
}
/**
 * onsubmit => evento que se dispara cuando
 * se envía el formulario
 */
formRegistro.onsubmit = (e) => {
  e.preventDefault();
  let placa = inputPlaca.value;
  let color = selectColor.value;
  let estado = radioNuevo.checked === true ? "nuevo" : "usado";
  let obs = textObs.value;
  /**
   * string.trim() función de los strings que elimina los espacios
   * en blanco de los EXTREMOS DE UN STRING, NO INTERNOS
   */
  if (placa.trim() === "" || color === "0" || obs.trim() === "") {
    formRegistro.classList.add("errorFormulario");
    alert("Error joven!, llene todos los campos");

    return;
  }
  formRegistro.classList.remove("errorFormulario");
  let objVehiculo = {
    placa: placa,
    color: color,
    estado: estado,
    observaciones: obs
  }
  console.log(objVehiculo);

  resetearFormulario();

  /**
   * RETO:
   * Mostrar una alerta de error si:
   * > El color está en cero ó 
   * > La placa está vacía ó
   * > No hay observaciones
   * EN CASO CONTRARIO, IMPRIMIR EL OBJETO CORRECTAMENTE
   */
  /**
   * a continación el código para redireccionar a otra página
   */
  // window.location.href = "https://www.google.com";
  /**
   * A continuación el código para abrir una nueva pestaña en una página distina
   */
  // window.open("https://www.google.com")
}

/**
 * elemento.focus()
 * función que establece el cursor por defecto en un determinado elemento
 */
inputPlaca.focus();

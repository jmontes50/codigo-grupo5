const inputColor = document.getElementById("inputColor");
const inputTamanio = document.getElementById("inputTamanio");
const formPreferencias = document.getElementById("formPreferencias");

formPreferencias.onsubmit = (e) => {
  e.preventDefault();
  let objPreferencias = {
    color: inputColor.value,
    tamanio: inputTamanio.value
  }

  /**
   * JSON.stringify(un_obj_json),
   * retorna un objeto JSON en formato STRING
   */
  let objString = JSON.stringify(objPreferencias);
  localStorage.setItem("preferencias", objString);
}

inputColor.onchange = (e) => {
  console.log(inputColor.value);
  /**
   * localstorage.setItem("clave","valor")
   * Crea una clave=>valor en el localstorage del navegador
   * y permanece inclusive si el navegador se cierra
   */
  localStorage.setItem("colorFavorito", inputColor.value);
}




const verificarStorage = () => {

  /**
   * localStorage.getItem("clave"), retorna el valor que tiene 
   * esa clave, si no hay ningún valor con esa clave, retorna NULL
   */
  let preferencias = localStorage.getItem("preferencias");
  if (preferencias) {
    /**
     * JSON.parse(obj_en_formato_string)
     * Convierte un string en un objeto JSON genuino
     */
    let preferenciasJSON = JSON.parse(preferencias);
    inputColor.value = preferenciasJSON.color;
    inputTamanio.value = preferenciasJSON.tamanio;
  }

}
verificarStorage();
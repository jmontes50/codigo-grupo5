const inputColor = document.getElementById("inputColor");
inputColor.onchange = (e) => {
  console.log(inputColor.value);
  /**
   * localstorage.setItem("clave","valor")
   * Crea una clave=>valor en el localstorage del navegador
   * y permanece inclusive si el navegador se cierra
   */
  localStorage.setItem("colorFavorito", inputColor.value);
}
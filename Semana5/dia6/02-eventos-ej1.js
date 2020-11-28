let btnTheme = document.getElementById("btnTheme");
let linkEstilos = document.getElementById("linkEstilos");

btnTheme.onclick = (e) => {
  if (linkEstilos.getAttribute("href") === "light.css") {
    linkEstilos.setAttribute("href", "dark.css")
  } else {
    linkEstilos.setAttribute("href", "light.css")
  }
}
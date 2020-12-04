let tarjetas = document.querySelectorAll(".tarjeta");
tarjetas = Array.from(tarjetas);

tarjetas.forEach((card) => {

  card.onmouseover = (e) => {
    card.classList.remove("shadow-sm");
    card.classList.add("shadow");
  }

  card.onmouseout = (e) => {
    card.classList.remove("shadow");
    card.classList.add("shadow-sm");
  }

})
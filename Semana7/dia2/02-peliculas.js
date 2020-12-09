const populares = document.getElementById("populares");

const dibujarPopulares = ({ results = [] }) => {

  results.forEach((peli) => {
    const div = document.createElement("div");
    div.classList.add("col-xl-3", "col-lg-3", "col-md-4", "col-sm-6", "mb-3");
    div.innerHTML = `<div class="card shadow">
                      <img src="https://image.tmdb.org/t/p/w500${peli.poster_path}" alt="" class="card-img-top">
                      <div class="card-body">
                        <h5 class="card-title">
                          ${peli.title}
                        </h5>
                        <p class="card-text">
                          ${peli.overview.substr(0, 100)}... <a href="#">Leer mas</a>
                        </p>
                        <small class="text-muted">
                          ${peli.release_date}
                        </small>
                      </div>
                    </div>`;
    populares.appendChild(div);
  })

}


const getPeliculasPopulares = () => {
  const urlTMDB = "https://api.themoviedb.org/3/movie/popular?api_key=105eb79aa1e6df60a2b95878ad2289aa&language=es-ES";
  fetch(urlTMDB).then((peticion) => {
    peticion.json().then((data) => {
      dibujarPopulares(data);
    })
  })
}
getPeliculasPopulares();
const getPeliculasPopulares = () => {
  const urlTMDB = "https://api.themoviedb.org/3/movie/popular?api_key=105eb79aa1e6df60a2b95878ad2289aa&language=es-ES";
  fetch(urlTMDB).then((peticion) => {
    peticion.json().then((data) => {
      console.log(data);
    })
  })
}
getPeliculasPopulares();
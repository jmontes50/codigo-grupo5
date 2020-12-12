import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
const App = () => {

  const miTitulo = "El título de mi apliqueishon";
  const libros = ["Cronica de una muerte anunciada", "Ña catita", "Ensayo sobre la ceguera", "Hansel y Gretel", "Siete Semillas", "Narraciones", "La rebelión de Atlas", "El sexto"];
  let librosLis = libros.map(libro => {
    return <li>{libro}</li>
  });


  return (
    <>
      <Header />
      <h1>{miTitulo}</h1>
      <div>
        Hola Mundo
      <p>
          lorem
      </p>
        <ul>
          {librosLis}
        </ul>
      </div>
      <Footer />
    </>
  )
}

export default App

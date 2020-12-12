import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import Usuarios from "./Usuarios";
import "./Usuario.css"
const App = () => {

  const miTitulo = "El título de mi apliqueishon";
  const libros = ["Cronica de una muerte anunciada", "Ña catita", "Ensayo sobre la ceguera", "Hansel y Gretel", "Siete Semillas", "Narraciones", "La rebelión de Atlas", "El sexto"];
  let librosLis = libros.map((libro, i) => {
    return (<li key={i}>{libro}</li>)
  });
  const users = [
    { id: 1, nombre: "Estrellida", apellido: "Estrada" },
    { id: 43, nombre: "Pepito", apellido: "Manrique" },
    { id: 245, nombre: "Carmenchita", apellido: "Torres" }
  ];

  const productos = [
    { id: 34, descripcion: "Play Station 5", precio: 3000.50 },
    { id: 453, descripcion: "Cámara Nikon D5600", precio: 4000 },
    { id: 78, descripcion: "Olla Arrocera", precio: 150.00 }
  ]

  return (
    <>
      <Header />
      <h1 style={
        {
          color: "#444",
          textAlign: "center"
        }
      }>{miTitulo}</h1>
      <div>
        Hola Mundo
      <p>
          lorem
      </p>
        <ul>
          {librosLis}
        </ul>
        <section>
          <Usuarios users={users}
            miTitulo={miTitulo} />
        </section>
      </div>
      <hr />
      <h2>Productos</h2>
      <Footer />
    </>
  )
}

export default App

import React from 'react'
import Pelicula from "./Pelicula"
import { peliculas } from "./../data/data";

const Peliculas = () => {


  return (
    <section className="row">

      {
        peliculas.map(peli => {
          return (<Pelicula peli={peli} key={peli.id} />)
        })
      }

    </section>
  )
}

export default Peliculas

import React from 'react'
import { generos } from '../data/data'

const Categorias = (props) => {

  /**
   * - Importar al arreglo generos del data.js
   * - Recorrer el arreglo props.cats para que en cada iteracion
   * recorran el arreglo "generos" de modo que busquen el nombre
   * del genero dado el id al que pertenecen
   * - Vamos formando un arreglo de strings de los nombres de 
   * cada categoria
   * OJO: el arreglo "props.cats" es numerico y el id de cada
   * "genero" es string (comprar con doble "=" )
   */
  let catsNombres = props.cats.map(cat_id => {
    let objGenero = generos.find((gen) => {
      if (+gen.id === +cat_id) {
        return gen;
      }
    });
    return objGenero.name;
  })


  return (
    <p className="card-text">
      {
        catsNombres.map(cat => {
          return (
            <span className="badge badge-danger mr-1"
              key={cat}>
              {cat}
            </span>
          )
        })
      }
    </p>
  )
}

export default Categorias

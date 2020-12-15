import React from 'react'

const Categorias = (props) => {
  return (
    <p className="card-text">
      {
        props.cats.map(cat => {
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

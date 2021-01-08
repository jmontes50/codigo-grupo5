import React, { useEffect, useState } from 'react'
import { getCategorias } from '../servicios/categoriasService';
import CategoriasContext from './categoriasContext'

const CategoriasState = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  
  const obtenerCategorias = () => {
    getCategorias().then(data => {
      setCategorias(data);
    });
  }

  useEffect(() => {
    obtenerCategorias();
  }, [])

  return (
    <CategoriasContext.Provider value={{
      categorias,
      setCategorias,
      obtenerCategorias
    }}>
      {children}
    </CategoriasContext.Provider>
  )
}

export default CategoriasState

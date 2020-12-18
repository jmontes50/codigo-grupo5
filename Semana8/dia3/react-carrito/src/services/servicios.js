const URL_BACKEND = "https://5fd162f2b485ea0016eee4dc.mockapi.io";

export const getProductos = async (termino = "") => {

  let url =
    termino.trim().length > 2 ?
      `${URL_BACKEND}/producto?search=${termino}` :
      `${URL_BACKEND}/producto`;
      
  const peticion = await fetch(url);
  const data = await peticion.json();
  return data;
}


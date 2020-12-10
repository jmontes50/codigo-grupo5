// colocar async en una función
// hace que lo que retorne dicha función sea una promesa

const url = "https://5fd162f2b485ea0016eee4dc.mockapi.io";
export const getCategorias = async () => {
  let peticion = await fetch(`${url}/categoria`)
  let data = await peticion.json();
  return data;
}

export const getProductos = async () => {
  let peticion = await fetch(`${url}/producto`)
  let data = await peticion.json();
  return data;
}
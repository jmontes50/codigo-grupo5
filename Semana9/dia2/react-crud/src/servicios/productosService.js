import { URL_BACKEND } from "./../environments/environments";

export const getProductos = async () => {
  const peticion = await fetch(`${URL_BACKEND}/producto`);
  const data = await peticion.json();
  return data;
}

export const postProducto = async (objProducto) => {

  const peticion = await fetch(`${URL_BACKEND}/producto`, {
    method: "POST",
    body: JSON.stringify(objProducto),
    headers: {
      "Content-type": "application/json"
    }
  });
  const data = await peticion.json();
  return data;
}
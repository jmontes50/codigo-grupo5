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

export const putProducto = async (objProducto) => {
  const peticion = await fetch(`${URL_BACKEND}/producto/${objProducto.prod_id}`, {
    method: "PUT",
    body: JSON.stringify(objProducto),
    headers: {
      "Content-type": "application/json"
    }
  });
  const data = await peticion.json();
  return data;
}

export const deleteProducto = async prod_id => {
  const peticion = await fetch(`${URL_BACKEND}/producto/${prod_id}`, {
    method: "DELETE"
  });
  const data = await peticion.json();
  return data;
}
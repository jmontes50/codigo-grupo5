import { URL_BACKEND } from "../environments/environments"

export const postPlato = async objPlato => {
  const peticion = await fetch(`${URL_BACKEND}/plato`, {
    method: "POST",
    body: JSON.stringify({
      ...objPlato,
      plato_img: "http://placehold.it/150X150"
    }),
    headers: {
      "Content-type": "application/json"
    }
  });
  const data = await peticion.json();
  return data;
}

export const postImagenPlato = async (imagen, plato_id) => {

  let miFormData = new FormData();
  miFormData.append("imagen", imagen);
  miFormData.append("plato_id", plato_id);

  const peticion = await fetch(`${URL_BACKEND}/plato/imagen/upload`, {
    method: "POST",
    body: miFormData,
    // headers: {
    //   "Content-type": "multipart/form-data; boundary=—-WebKitFormBoundaryfgtsKTYLsT7PNUVD"
    // }
  });
  const data = await peticion.json();
  return data;
}
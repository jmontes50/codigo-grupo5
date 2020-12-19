const URL_BACKEND = "https://api.openweathermap.org/data/2.5/forecast";
const APP_ID = "f216cdc5ffb3839b7ebdb07394220bc1";

export const getClimaPorCiudad = async ciudad => {
  const peticion = await fetch(`${URL_BACKEND}?q=${ciudad}&appid=${APP_ID}`);
  const data = await peticion.json();
  return data;
}
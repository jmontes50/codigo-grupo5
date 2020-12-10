import { getCategorias, getProductos } from "./servicios.js";

const productosContainer = document.getElementById("productosContainer");

let productos = [];
let categorias = [];

const dibujarProductos = () => {

}

const getRecursos = async () => {
  productos = await getProductos();
  categorias = await getCategorias();
  dibujarProductos();
}

getRecursos();
// puedo ir habliltando librerias
// puedo cargar otra API que me traiga datos del clima
// puedo ir obteneiendo el localStorage para settear preferencias
// del usuario
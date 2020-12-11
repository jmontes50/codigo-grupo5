import { getCategorias, getProductos } from "./servicios.js";

const productosContainer = document.getElementById("productosContainer");
const radioCards = document.getElementById("radioCards");
const radioTabla = document.getElementById("radioTabla");
const btnCrearProducto = document.getElementById("btnCrearProducto");
const crearProductoModal = document.getElementById("crearProductoModal");
const modalCrear = new bootstrap.Modal(crearProductoModal);

let modo = "tabla";//cards
let productos = [];
let categorias = [];

const dibujarProductos = () => {

  productosContainer.innerHTML = "";

  if (modo === "tabla") {
    // dibujar modo tabla

    let tabla = document.createElement("table");
    tabla.classList.add("table", "table-bordered", "table-striped", "mt-4")
    tabla.innerHTML = `
      <thead>
        <tr>
          <th>#</th>
          <th>Id</th>
          <th>Nombre Producto</th>
          <th>Precio Producto</th>
          <th>Stock</th>
          <th>Categoría</th>
          <th>Imagen</th>
        </tr>
      </thead>`;
    let tbody = document.createElement("tbody");
    productos.forEach((prod, i) => {
      let filaTmp = document.createElement("tr");
      filaTmp.innerHTML = `
        <td>${i}</td>
        <td>${prod.prod_id}</td>
        <td>${prod.prod_nom}</td>
        <td>${prod.prod_pre}</td>
        <td>${prod.prod_stock}</td>
        <td>${prod.categoria.cat_nom}</td>
        <td><img src="${prod.prod_img}" width="100" class="rounded-circle" ></td>`;
      tbody.appendChild(filaTmp);
    });
    tabla.appendChild(tbody);
    productosContainer.appendChild(tabla);
  } else {
    // dibujar modo cards
  }

}
/**
 * Función que agrega el campo "cat_nom" a cada producto,
 */
const mapearProductos = () => {
  productos = productos.map(prod => {
    prod.categoria = categorias.find(cat => {
      if (cat.cat_id == prod.cat_id) {
        return cat;
      }
    });
    return prod;
  });
}

const getRecursos = async () => {
  productos = await getProductos();
  categorias = await getCategorias();
  mapearProductos();
  dibujarProductos();
}

getRecursos();
// puedo ir habliltando librerias
// puedo cargar otra API que me traiga datos del clima
// puedo ir obteneiendo el localStorage para settear preferencias
// del usuario

let onCheck = (e) => {
  // Forma 1
  // if (e.target.id === "radioTabla") {
  //   modo = "tabla";
  // } else {
  //   modo = "cards";
  // }
  // dibujarProductos();

  //Forma 2
  if (radioTabla.checked === true) {
    modo = "tabla";
  } else {
    modo = "cards";
  }
  dibujarProductos();
}


radioCards.onchange = onCheck;
radioTabla.onchange = onCheck;

btnCrearProducto.onclick = () => {
  modalCrear.show();
}
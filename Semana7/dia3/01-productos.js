import { getCategorias, getProductos, postProducto } from "./servicios.js";
const inputCrearNombre = document.getElementById("inputCrearNombre");
const inputCrearPrecio = document.getElementById("inputCrearPrecio");
const inputCrearImagen = document.getElementById("inputCrearImagen");
const inputCrearStock = document.getElementById("inputCrearStock");
const selectCrearCategoria = document.getElementById("selectCrearCategoria");

const productosContainer = document.getElementById("productosContainer");
const formCrearProducto = document.getElementById("formCrearProducto");
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
    productos.forEach((pro) => {
      let card = document.createElement("div");
      card.classList.add("col-xl-3", "col-lg-3", "col-md-4", "col-sm-6", "mb-3");
      card.innerHTML = `
            <div class="card shadow">
              <img src="http://placehold.it/200X200" alt="" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">
                  Titulo de la pelicula
                </h5>
                <p class="card-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos iusto atque! Quo eius
                  laborum praesentium cumque fugiat
                </p>
                <small class="text-muted">
                  2020-08-12
                </small>
              </div>
            </div>`;
      productosContainer.appendChild(card);
    });
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


const poblarSelectCrearProducto = () => {
  categorias.forEach(cat => {
    let optionTmp = document.createElement("option")
    optionTmp.innerText = cat.cat_nom;
    optionTmp.value = cat.cat_id;
    selectCrearCategoria.appendChild(optionTmp);
  })
}

const getRecursos = async () => {
  productos = await getProductos();
  categorias = await getCategorias();
  mapearProductos();
  dibujarProductos();
  poblarSelectCrearProducto();
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


/**
 * Función que retorna FALSE si no hay errores
 * y retorna TRUE si es que hay errores
 */
const validarControles = (controles = []) => {
  let errores = false;
  controles.forEach((control) => {
    control.classList.remove("is-invalid");
    control.classList.add("is-valid")
    if (control.value.trim() === "") {
      errores = true;
      control.classList.add("is-invalid");
      control.classList.remove("is-valid");
    }
  })
  return errores;
}


formCrearProducto.onsubmit = e => {
  e.preventDefault();
  if (validarControles([inputCrearNombre, inputCrearPrecio,
    inputCrearImagen, inputCrearStock]) === false) {
    //  entonces, enviar el formulario correctamente a la base de gatos


    let objProducto = {
      "prod_nom": inputCrearNombre.value.trim(),
      "prod_pre": inputCrearPrecio.value,
      "prod_stock": inputCrearStock.value,
      "prod_sku": uuid.v4(),
      "cat_id": selectCrearCategoria.value,
      "prod_img": inputCrearImagen.value
    };

    postProducto(objProducto).then((data) => {
      console.log(data);
      //llamamos a los recursos de la base de datos nuevamnete
      getRecursos();
      // ocultamos el modal
      modalCrear.hide();
      // limpiamos o reseteamos el formulario de Crear
      formCrearProducto.reset();
    })
  }
}

/**
 * TAREA
 * 1. CREAR UN MODAL DE EDITAR PRODUCTO.
 * 2. En cada producto (tabla/cards) agregar un boton con el texto editar
 * 3. El boton editar debe arbri el modal EDITAR PRODUCTO con todos los campos
 *    llenos propios del producto,
 * 4. Cuando terminemos de modificar el formulario, la tabla/data debe actualizarse
 *
 * HINTS: Usar el verbo PUT
 * - En la petición, enviar el body, los headers y  un query param:
 * Query Param: URL/producto/:id_del_producto
 * - Cuando creemos la tabla o los cards con cada producto, crear los botones
 * y darle el evento onclick a cada boton al momento de crear dichos productos.
 * Considererar el innertHTML o dejar de usarlo y crear el boton de manera manual
 */

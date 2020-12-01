const tipos = [
  { idTipo: 1, nombreTipo: "Platos" },
  { idTipo: 2, nombreTipo: "Bebidas" },
  { idTipo: 3, nombreTipo: "Postres" }
];

const categorias = [
  { idCategoria: 1, nombreCategoria: "Fondo", idTipo: 1 },
  { idCategoria: 2, nombreCategoria: "Entradas", idTipo: 1 },
  { idCategoria: 3, nombreCategoria: "Sopas", idTipo: 1 },
  { idCategoria: 4, nombreCategoria: "Cocktails", idTipo: 2 },
  { idCategoria: 5, nombreCategoria: "Refrescos", idTipo: 2 },
  { idCategoria: 6, nombreCategoria: "Jugo de Frutas", idTipo: 2 },
  { idCategoria: 7, nombreCategoria: "Helados", idTipo: 3 },
  { idCategoria: 8, nombreCategoria: "Tortas", idTipo: 3 }
]

const selectTipo = document.getElementById("selectTipo");
const selectCategoria = document.getElementById("selectCategoria");

const llenarTipos = () => {

  tipos.forEach((tipo) => {
    let miOption = document.createElement("option");
    miOption.innerText = tipo.nombreTipo;
    miOption.value = tipo.idTipo;
    selectTipo.appendChild(miOption);
  })

}
llenarTipos();

const llenarCategoriasPorId = (idTipo) => {
  if (idTipo === 0) {
    selectCategoria.innerHTML = "<option value='0'>-Seleccione Categoria-</option>";
    return;
  }
  selectCategoria.innerHTML = "";
  
  let categoriasPorTipo = categorias.filter((cat) => {
    if (cat.idTipo === idTipo) {
      return cat;
    }
  });

  categoriasPorTipo.forEach((cat) => {
    let optionCat = document.createElement("option");
    optionCat.innerText = cat.nombreCategoria;
    optionCat.value = cat.idCategoria;
    selectCategoria.appendChild(optionCat);
  })

}

/**
 * elemento.onchange Se ejecuta cada vez que un input o select
 * cambia su valor, es decir cuando se selecciona un "option"
 */
selectTipo.onchange = (e) => {
  let idTipo = +selectTipo.value;
  llenarCategoriasPorId(idTipo);
}

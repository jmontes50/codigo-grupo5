const tbody = document.getElementById("tbody");

const dibujarUsuarios = ({ data = [] }) => {
  //Limpiar el tbody
  tbody.innerHTML = "";
  data.forEach((usuario) => {
    let filaTemp = document.createElement("tr");
    filaTemp.innerHTML = `
      <td>${usuario.id}</td>
      <td>${usuario.first_name}</td>
      <td>${usuario.last_name}</td>
      <td>${usuario.email}</td>
      <td><img class="rounded-circle" src="${usuario.avatar}"/></td>
    `;
    tbody.appendChild(filaTemp)
  });
}

fetch("https://reqres.in/api/users", {
  method: "GET"
}).then((peticion) => {
  peticion.json().then((rpta) => {
    dibujarUsuarios(rpta);
  })
})
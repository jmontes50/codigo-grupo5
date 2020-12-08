const usuarios = document.getElementById("usuarios");
console.log("aquiii1");

axios.get("https://reqres.in/api/users")
  .then((respuesta) => {
    usuarios.innerHTML = "";
    let lista = respuesta.data.data;
    lista.forEach((usu) => {
      let liTemporal = document.createElement("li");
      liTemporal.innerText = `${usu.first_name} ${usu.last_name}`;
      usuarios.appendChild(liTemporal);
    });
  })

console.log("aquiii2");
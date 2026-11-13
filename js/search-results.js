let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let search = queryStringObj.get("search");
let buscador = document.querySelector(".error-buscador");

if (search == "" || search == null) {
    buscador.innerText = "El campo de búsqueda no puede estar vacío";
} else if (search.length < 3) {
    buscador.innerText = "El término de búsqueda debe tener al menos 3 caracteres";
}


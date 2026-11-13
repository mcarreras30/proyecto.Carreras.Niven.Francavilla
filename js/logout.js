let formBuscador = document.querySelector(".buscador form");
let inputBuscador = document.querySelector(".buscador input");
let errorBuscador = document.querySelector(".error-buscador");

formBuscador.addEventListener("submit", function(event) {
    let termino = inputBuscador.value;
    if (termino === "") {
        event.preventDefault();
        errorBuscador.innerText = "El campo de búsqueda no puede estar vacío.";
    } else if (termino.length < 3) {
        event.preventDefault();
        errorBuscador.innerText = "El término de búsqueda debe tener al menos 3 caracteres.";
    } 
});
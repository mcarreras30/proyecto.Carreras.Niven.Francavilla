let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let search = queryStringObj.get("search");
let buscador = document.querySelector(".error-buscador");
let formulario = document.querySelector(".buscador form");
let texto = document.querySelector('.buscador input');
let formRegistro = document.querySelector('.section-register form');
let campoEmailRegistro = document.querySelector('#email');
let campoContraseñaRegistro = document.querySelector('#contraseña');
let campoRepetir = document.querySelector('#repetircontraseña');
let errorRegistro = document.querySelector('.error-register');
formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    if (texto.value == "") {
        buscador.innerText = "El campo de búsqueda no puede estar vacío";
    } else if (texto.value.length < 3) {
        buscador.innerText = "El término de búsqueda debe tener al menos 3 caracteres";
    } else {
        this.submit();
    }
});

formRegistro.addEventListener('submit', function (event){
    event.preventDefault();
    if (campoEmailRegistro.value == ""){
        errorRegistro.innerText = "El email es obligatorio";
    }else if (campoContraseñaRegistro.value == ""){
        errorRegistro.innerText = "La contraseña es obligatoria";
    }else if (campoContraseñaRegistro.value.length < 6){
        errorRegistro.innerText = "La contraseña debe tener al menos 6 caracteres";
    }else if (campoContraseñaRegistro.value != campoRepetir.value){
        errorRegistro.innerText = "Las contraseñas no coinciden";
    }else {
        this.submit()
    }
});
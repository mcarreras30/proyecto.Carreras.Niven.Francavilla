let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let search = queryStringObj.get("search");
let buscador = document.querySelector(".error-buscador");
let formulario = document.querySelector(".buscador form");
let texto = document.querySelector('.buscador input');
let formLogin = document.querySelector('.section-login form');
let campoEmail = document.querySelector('#email');
let campoContraseña = document.querySelector ('#contraseña');
let errorLogin = document.querySelector ('.error-login');
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

formLogin.addEventListener('submit', function (event){
    event.preventDefault();
    if (campoEmail.value == ""){
        errorLogin.innerText = "El email es obligatorio";
    }else if (campoContraseña.value == ""){
        errorLogin.innerText = "La contraseña es obligatoria";
    }else if (campoContraseña.value.length < 6){
        errorLogin.innerText = "La contraseña debe tener al menos 6 caracteres";
    }else {
        localStorage.setItem("email", campoEmail.value);
        this.submit()
    }
});
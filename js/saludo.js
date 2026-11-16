let emailGuardado = localStorage.getItem("email");
let linkLogin = document.querySelector(".link-login");
let linkRegister = document.querySelector(".link-register");
let saludo = document.querySelector(".saludo");
let linkLogout = document.querySelector(".link-logout");

if (emailGuardado == null) {
    linkLogout.style.display = "none";
} else {
    saludo.innerText = "Bienvenido: " + emailGuardado;
    linkLogin.style.display = "none";
    linkRegister.style.display = "none";
}



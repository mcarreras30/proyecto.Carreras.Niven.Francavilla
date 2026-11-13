let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let search = queryStringObj.get("search");
let buscador = document.querySelector(".error-buscador");
let formulario = document.querySelector(".buscador form");
let texto = document.querySelector('.buscador input');
let listaCategorias = document.querySelector('.catalogo ul');

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

fetch ('https://dummyjson.com/products/category-list')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let items = "";
        for (let i = 0; i < data.length; i++) {
        items += `<li><a class="categorias" href="./category.html?category=${data[i]}">${data[i]}</a></li>`;
    }
    listaCategorias.innerHTML = items;
    })
    .catch(function (error) {
        console.log('El error es:' + error);
    });


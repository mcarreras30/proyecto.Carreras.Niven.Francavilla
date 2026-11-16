let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let search = queryStringObj.get("search");
let buscador = document.querySelector(".error-buscador");
let formulario = document.querySelector(".buscador form");
let texto = document.querySelector('.buscador input');
let listaCategorias = document.querySelector('.catalogo ul');
let tituloResultados = document.querySelector('.titulohome');
let listaResultados = document.querySelector('.lista-productos');

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

fetch ('https://dummyjson.com/products/categories')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let items = "";
        for (let i = 0; i < data.length; i++) {
        items += `<li><a class="categorias" href="./category.html?category=${data[i].slug}">${data[i].name}</a></li>`;
    }
    listaCategorias.innerHTML = items;
    })
    .catch(function (error) {
        console.log('El error es:' + error);
    });

tituloResultados.innerText = "Resultados de búsqueda para: " + search;

fetch(`https://dummyjson.com/products/search?q=${search}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
       if (data.products.length == 0) {
            listaResultados.innerText = "No hay resultados para el término: " + search;
        } else {
            let items = "";
            for (let i = 0; i < data.products.length; i++) {
                items += `
                    <article class="producto">
                        <img src="${data.products[i].thumbnail}" alt="${data.products[i].title}">
                        <h3>${data.products[i].title}</h3>
                        <p class="descripcion">${data.products[i].description}</p>
                        <p class="precio">$${data.products[i].price}</p>
                        <a class="boton" href="./product.html?id=${data.products[i].id}">Ver detalle</a>
                    </article>`;
            }
            listaResultados.innerHTML = items;
        }
    })
    .catch(function (error) {
        console.log('El error es:' + error);
    });

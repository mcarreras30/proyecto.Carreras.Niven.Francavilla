let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let search = queryStringObj.get("search");
let buscador = document.querySelector(".error-buscador");
let formulario = document.querySelector(".buscador form");
let texto = document.querySelector('.buscador input');
let listaCategorias = document.querySelector('.catalogo ul');
let id = queryStringObj.get("id");

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

fetch(`https://dummyjson.com/products/${id}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let nombre = document.querySelector('.nombre');
        nombre.innerText = data.title;
        let marca = document.querySelector('.marca');
        if (data.brand == undefined) {
            marca.innerText = "Marca: sin marca";
        } else {
            marca.innerText = `Marca: ${data.brand}`;
        }
        let descripcion = document.querySelector('.descripcion');
        descripcion.innerText = data.description;
        let precio = document.querySelector('.precio');
        precio.innerText = `$${data.price}`;
        let stock = document.querySelector('.stock');
        stock.innerText = `Stock: ${data.stock} unidades`;
        let foto = document.querySelector('.imagen-detalle');
        foto.innerHTML = `<img class="imagen-detalle" src="${data.thumbnail}" alt="${data.title}">`;
        let categoria = document.querySelector('.categoria');
        categoria.innerHTML = `<a href="./category.html?category=${data.category}">${data.category}</a>`;
        let tags = document.querySelector('.tags');
        let itemsTags = "";
        for (let i = 0; i < data.tags.length && i < 3; i++) {
             itemsTags += `<li>${data.tags[i]}</li>`;
        }
        tags.innerHTML = itemsTags;
        let reviews = document.querySelector(".detalle-reviews");
        let itemsReviews = "";
        for (let i = 0; i < data.reviews.length; i++) {
            itemsReviews += `
        <article class="reviewsindividual">
            <p class="textoreview">Rating: ${data.reviews[i].rating}</p>
            <p class="textoreview">${data.reviews[i].comment}</p>
            <p class="textoreview nombrereview">${data.reviews[i].reviewerName} - ${data.reviews[i].date}</p> 
        </article>`;
}
reviews.innerHTML = itemsReviews;

    })
    .catch(function (error) {
        console.log('El error es:' + error);
    });

document.addEventListener('DOMContentLoaded', function () {
    const cartList = document.getElementById('cart-list');
    const movieCards = document.querySelectorAll('.movie-card');

    movieCards.forEach((card) => {
        card.addEventListener('click', () => {
            const movieTitle = card.querySelector('.back h2').innerText;

            if (!isMovieInCart(movieTitle)) {
                agregarPeliculaAlCarrito(movieTitle, ''); // You can pass an empty string as the description for now
            } else {
                eliminarDelCarrito(movieTitle);
            }
        });
    });

    const carrito = [];

    function toggleCarrito() {
        const cartList = document.getElementById('cart-list');
        const agregarEliminarDiv = document.getElementById('agregarEliminar');

        if (cartList.style.display === 'none' || cartList.style.display === '') {
            cartList.style.display = 'block';
            agregarEliminarDiv.style.display = 'none';
        } else {
            cartList.style.display = 'none';
            agregarEliminarDiv.style.display = 'block';
        }
    }

    function agregarPeliculaAlCarrito(titulo, descripcion) {
        const pelicula = { titulo, descripcion };
        carrito.push(pelicula);
        actualizarCarrito();
    }

    function eliminarDelCarrito(titulo) {
        const index = carrito.findIndex((pelicula) => pelicula.titulo === titulo);
        if (index !== -1) {
            carrito.splice(index, 1);
            actualizarCarrito();
        }
    }

    function actualizarCarrito() {
        const cartList = document.getElementById('cart-list');
        cartList.innerHTML = '';

        carrito.forEach((pelicula, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${pelicula.titulo} - ${pelicula.descripcion}`;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.onclick = () => eliminarDelCarrito(pelicula.titulo);

            listItem.appendChild(deleteButton);
            cartList.appendChild(listItem);
        });
    }
});

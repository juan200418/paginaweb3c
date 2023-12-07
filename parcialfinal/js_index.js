// mostrarHora.js
function mostrarHora() {
    const elementoHora = document.getElementById('horaActual');

    function actualizarHora() {
        const fecha = new Date();
        const hora = fecha.getHours();
        const minutos = fecha.getMinutes();
        const segundos = fecha.getSeconds();

        // Formatear la hora como "hh:mm:ss"
        const horaFormateada = `${agregarCeroDelante(hora)}:${agregarCeroDelante(minutos)}:${agregarCeroDelante(segundos)}`;

        // Actualizar el contenido del elemento
        elementoHora.textContent = `Hora actual: ${horaFormateada}`;
    }

    function agregarCeroDelante(valor) {
        return valor < 10 ? `0${valor}` : valor;
    }

    // Actualizar la hora cada segundo
    setInterval(actualizarHora, 1000);

    // Mostrar la hora inicialmente
    actualizarHora();
}

// Llamar a la función al cargar la página
mostrarHora();

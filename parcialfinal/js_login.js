function isAuthenticated() {
    // Puedes almacenar esta información en una cookie o en el almacenamiento local del navegador
    // Para simplificar, simplemente almacenaremos la información en una variable
    const username = 'juan';
    const password = '1234';

    return username === 'juan' && password === '1234';
}

function validateVote() {
    if (isAuthenticated()) {
        // Lógica para procesar el voto
        // Puedes usar AJAX para enviar los datos del voto al servidor y almacenarlos
    } else {
        // Mostrar un mensaje de error que indica que el usuario debe iniciar sesión antes de poder votar
        document.getElementById('voteMessage').innerText = 'Debes iniciar sesión antes de poder votar';
    }
}
function validateLogin() {
    // Realiza la validación del formulario aquí

    // Si la validación es exitosa, redirige al usuario al index.html
    window.location.href = "index.html";
}
document.querySelector('header').addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
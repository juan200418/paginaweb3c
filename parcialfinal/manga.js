document.body.addEventListener('click', function() {
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
const tarjetas = document.querySelectorAll('.tarjeta');

tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('mouseover', function() {
        tarjeta.style.transform = 'scale(1.1)';
    });

    tarjeta.addEventListener('mouseout', function() {
        tarjeta.style.transform = 'scale(1)';
    });
});


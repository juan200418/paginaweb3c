function toggleInfo(infoId) {
    const infoElement = document.getElementById(infoId);

    // Cambia la visibilidad de la información
    if (infoElement.style.display === 'none' || infoElement.style.display === '') {
        infoElement.style.display = 'block';
    } else {
        infoElement.style.display = 'none';
    }
}

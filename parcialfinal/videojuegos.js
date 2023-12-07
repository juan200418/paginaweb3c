function toggleCard(cardId, title, genre, description) {
    const card = document.getElementById(cardId);
    card.innerHTML = `<h2>${title}</h2><p>Género: ${genre}</p><p>${description}</p>`;
    card.classList.toggle('back');
}


const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");

for (let card of cards) {
    card.addEventListener("click", function() {
        modalOverlay.classList.add('active');
        const pageId = card.getAttribute('curseName');

        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${pageId}`;
    })
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('iframe').src = "";
})
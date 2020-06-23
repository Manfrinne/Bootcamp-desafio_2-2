
const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");
const modalMax = document.querySelector('.modal')

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
    modalMax.classList.remove('fullscreen');
})

document.querySelector('.max-modal').addEventListener("click", function() {
    if (modalMax.classList.contains('fullscreen')) {
        modalMax.classList.remove('fullscreen');
    } else {
        modalMax.classList.add('fullscreen');
    }
})
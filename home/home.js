// Variables del carrusel
const carruselInner = document.querySelector(".carrusel-inner");
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");
const items = document.querySelectorAll(".carrusel-item");
let currentIndex = 0;
const totalItems = items.length;

// Actualizar la posición del carrusel
function updateCarrusel() {
    const offset = -currentIndex * 100; // Desplazamiento según índice
    carruselInner.style.transform = `translateX(${offset}%)`;
}

// Botón Siguiente
btnNext.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarrusel();
});

// Botón Anterior
btnPrev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarrusel();
});

// Desplazamiento automático cada 4 segundos
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarrusel();
}, 4000);

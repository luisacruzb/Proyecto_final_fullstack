document.addEventListener('DOMContentLoaded', () => {
    const inner = document.querySelector('.carousel_inner');
    const slides = document.querySelectorAll('.carousel_card');
    let isTransitioning = false;

    function moveToIndex(i) {
        const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(inner).columnGap); // Ancho de cada slide + gap
        inner.style.transform = `translateX(-${i * slideWidth}px)`;
    }

    function nextSlide() {
        if (isTransitioning) return;
        isTransitioning = true;

        // Mover la primera tarjeta al final sin animación
        inner.appendChild(inner.firstElementChild);
        moveToIndex(0);  // Ajustar la posición inmediatamente
        isTransitioning = false;
    }

    function prevSlide() {
        if (isTransitioning) return;
        isTransitioning = true;

        // Mover la última tarjeta al principio sin animación
        inner.prepend(inner.lastElementChild);
        moveToIndex(0);  // Ajustar la posición inmediatamente
        isTransitioning = false;
    }

    document.querySelector('.carousel-control-prev').addEventListener('click', () => {
        prevSlide();
    });

    document.querySelector('.carousel-control-next').addEventListener('click', () => {
        nextSlide();
    });

    // Hacer que el carrusel se mueva automáticamente
    setInterval(nextSlide, 3000); // Tiempo entre cambios automáticos
});

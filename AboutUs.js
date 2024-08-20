document.addEventListener('DOMContentLoaded', () => {
    const inner = document.querySelector('.carousel-inner');
    let index = 0;
    
    function showSlide(i) {
        const slides = document.querySelectorAll('.page_section > div');
        const totalSlides = slides.length;
        if (i >= totalSlides) index = 0;
        if (i < 0) index = totalSlides - 1;
        inner.style.transform = `translateX(-${index * 100}%)`;
    }
    
    document.querySelector('.carousel-control-prev').addEventListener('click', () => {
        index--;
        showSlide(index);
    });
    
    document.querySelector('.carousel-control-next').addEventListener('click', () => {
        index++;
        showSlide(index);
    });
    
    showSlide(index);
});






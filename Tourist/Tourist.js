const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(slideIndex) {
    slides[currentSlide].style.display = 'none';
    slides[slideIndex].style.display = 'block';
    currentSlide = slideIndex;
}

function nextSlide() {
    let nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

function prevSlide() {
    let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
}

showSlide(currentSlide);
setInterval(nextSlide, 3000); 


$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});
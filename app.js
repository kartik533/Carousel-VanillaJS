let currentSlide = 0;
let slides = document.getElementsByClassName('carousel__item');
console.log(slides.length);

document.getElementById('carousel__button--prev').addEventListener(
    'click', () => moveToPrevSlide());

document.getElementById('carousel__button--next').addEventListener(
    'click', () => moveToNextSlide());


function moveToPrevSlide() {
    currentSlide === 0 ? currentSlide = slides.length - 1 : currentSlide -= 1
    updateSlidesStyles();
}

function moveToNextSlide() {
   currentSlide === slides.length - 1 ? currentSlide = 0 : currentSlide += 1
   updateSlidesStyles();
}

function updateSlidesStyles() {
    for (let slide of slides) {
        slide.classList.remove('carousel__item--visible');
        slide.classList.add('carousel__item--hidden');
    }
    slides[currentSlide].classList.add('carousel__item--visible')
}
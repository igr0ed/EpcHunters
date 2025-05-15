const modal = document.querySelector('.modal');
const openButton = document.querySelector('.button-info');
const closeButton = document.querySelector('.close-button');

openButton.addEventListener('click', () => {
    modal.classList.add('active');
});

closeButton.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (!e.target.closest('.modal__content')) {
        modal.classList.remove('active')
    }
})


document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header');
    const bgColor = document.querySelector('span');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('show');
        bgColor.classList.toggle('black-after');
    });
});

// Scroll

document.addEventListener('DOMContentLoaded', () => {

    const track = document.querySelector('.steps');
    const items = document.querySelectorAll('.step');
    const btnLeft = document.querySelector('.buttons__left');
    const btnRight = document.querySelector('.buttons__right');

    let currentSlide = 0;
    const slideCount = items.length;

    function initSlider() {
        items.forEach((slide, index) => {
            slide.style.order = index;
        });
        updateSlider();
    }

    function updateSlider() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function goToPrevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlider();
    }

    function goToNextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlider();
    }

    btnLeft.addEventListener('click', goToPrevSlide);
    btnRight.addEventListener('click', goToNextSlide);

    initSlider();

    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const delta = touchEndX - touchStartX;
        if (Math.abs(delta) > 50) { // минимальная длина свайпа
            if (delta < 0) {
                goToNextSlide();
            } else {
                goToPrevSlide();
            }
        }
    }

})


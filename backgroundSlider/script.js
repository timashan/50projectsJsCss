const btnLeft = document.querySelector('.btn--left');
const btnRight = document.querySelector('.btn--right');
const slides = document.querySelectorAll('.slide');

let activeSlide = 0;
const slideLength = slides.length;

const setBackground = function (activeSlide) {
  document.body.style.backgroundImage = getComputedStyle(
    slides[activeSlide]
  ).backgroundImage;
};

const setSlide = function (activeSlide) {
  slides.forEach(slide => slide.classList.remove('active'));

  slides.forEach((slide, idx) => {
    if (idx == activeSlide) slide.classList.add('active');
  });
};

btnRight.addEventListener('click', function () {
  activeSlide++;
  if (activeSlide > slideLength - 1) {
    activeSlide = 0;
  }

  setSlide(activeSlide);
  setBackground(activeSlide);
});

btnLeft.addEventListener('click', function () {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slideLength - 1;
  }

  setSlide(activeSlide);
  setBackground(activeSlide);
});

setSlide(activeSlide);
setBackground(activeSlide);

const imgContainer = document.querySelector('.image-container');
const imgs = document.querySelectorAll('.image-container img');
const btnPrev = document.querySelector('.btn--left');
const btnNext = document.querySelector('.btn--right');

let currentSlide = 0;
const totalSlides = imgs.length;

const changeSlide = function () {
  if (currentSlide > totalSlides - 1) currentSlide = 0;
  if (currentSlide < 0) currentSlide = totalSlides - 1;

  imgContainer.style.transform = `translateX(-${50 * currentSlide}rem)`;
};

const autoSlide = function () {
  ++currentSlide;
  changeSlide();
};

let interval = setInterval(autoSlide, 2000);

const reset = function () {
  clearInterval(interval);
  interval = setInterval(autoSlide, 2000);
};

btnPrev.addEventListener('click', function () {
  --currentSlide;
  reset();
  changeSlide();
});

btnNext.addEventListener('click', function () {
  ++currentSlide;
  reset();
  changeSlide();
});

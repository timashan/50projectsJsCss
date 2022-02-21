const buttons = document.querySelector('.buttons');
const sliderLeft = document.querySelector('.slider-left');
const sliderRight = document.querySelector('.slider-right');
const slides = document.querySelectorAll('.slide');
const slidesLength = slides.length;

sliderLeft.style.top = `${-100 * (slidesLength - 1)}vh`;
let activeSlide = 0;

buttons.addEventListener('click', function (e) {
  const btn = e.target.closest('.btn');
  if (!btn) return;
  if (btn.classList.contains('btn--up')) {
    activeSlide++;
    if (activeSlide > slidesLength - 1) activeSlide = 0;
  }

  //sliderRight.clientHeight
  if (btn.classList.contains('btn--down')) {
    activeSlide--;
    if (activeSlide < 0) activeSlide = slidesLength - 1;
  }

  sliderRight.style.transform = `translateY(-${100 * activeSlide}vh)`;
  sliderLeft.style.transform = `translateY(${100 * activeSlide}vh)`;
});

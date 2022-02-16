const nextBtn = document.querySelector('.btn--next');
const prevBtn = document.querySelector('.btn--prev');
const circles = document.querySelectorAll('.circle');
const progress = document.querySelector('.progress');

let currentActive = 1;

const update = function () {
  circles.forEach((cir, idx) => {
    idx < currentActive
      ? cir.classList.add('active')
      : cir.classList.remove('active');
  });

  progress.style.width =
    ((currentActive - 1) / (circles.length - 1)) * 100 + '%';

  (prevBtn.disabled = false) || (nextBtn.disabled = false);
  if (currentActive === 1) prevBtn.disabled = true;
  if (currentActive === circles.length) nextBtn.disabled = true;
};

nextBtn.addEventListener('click', function () {
  if (currentActive >= circles.length) return;
  currentActive++;
  update();
});

prevBtn.addEventListener('click', function () {
  if (currentActive <= 1) return;
  currentActive--;
  update();
});

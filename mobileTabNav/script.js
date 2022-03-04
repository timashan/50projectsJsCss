const navList = document.querySelector('.nav__list');
const phoneImgs = document.querySelectorAll('.phone__imgs img');
const navBtns = document.querySelectorAll('.nav__btn');

const resetDOM = function () {
  phoneImgs.forEach(el => el.classList.remove('show'));
  navBtns.forEach(el => el.classList.remove('active'));
};

navList.addEventListener('click', function (e) {
  const btn = e.target.closest('.nav__btn');
  if (!btn) return;
  const idx = [...navList.children].indexOf(btn);

  resetDOM();
  phoneImgs[idx].classList.add('show');
  btn.classList.add('active');
});

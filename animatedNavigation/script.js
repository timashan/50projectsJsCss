const navBtn = document.querySelector('.nav__btn');
const nav = document.querySelector('.nav');

navBtn.addEventListener('click', function () {
  nav.classList.toggle('active');
});

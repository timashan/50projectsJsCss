const btnOpen = document.querySelector('.btn--open');
const btnClose = document.querySelector('.btn--close');
const navs = document.querySelectorAll('.nav');

btnOpen.addEventListener('click', function () {
  navs.forEach(nav => nav.classList.add('visible'));
});

btnClose.addEventListener('click', function () {
  navs.forEach(nav => nav.classList.remove('visible'));
});

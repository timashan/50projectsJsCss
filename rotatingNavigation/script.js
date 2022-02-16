const container = document.querySelector('.container');
const circle = document.querySelector('.circle');

circle.addEventListener('click', function () {
  container.classList.toggle('show-nav');
});

const search = document.querySelector('.search');
const searchBtn = document.querySelector('.search__btn');

searchBtn.addEventListener('click', function () {
  search.classList.toggle('active');
});

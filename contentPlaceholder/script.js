const cardHeader = document.querySelector('.card__header');
const arthurImg = document.querySelector('.card__author-img');
const title = document.querySelector('.card__title');
const excerpt = document.querySelector('.card__excerpt');
const arthurName = document.querySelector('.card__author-name');
const date = document.querySelector('.card__author-date');

const bgAnime = document.querySelectorAll('.animated-bg');
const bgAnimeText = document.querySelectorAll('.animated-bg-text');

const load = function () {
  cardHeader.innerHTML = `
<img
class="card__img"
src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
alt="laptop"
/>
`;

  arthurImg.innerHTML = `
<img
src="https://randomuser.me/api/portraits/men/45.jpg"
alt="user"
/>
`;
  title.innerText = 'Lorem ipsum dolor sit amet.';
  excerpt.innerText =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, numquam.';
  arthurName.innerHTML = 'John Doe';
  date.innerText = 'Oct 08, 2020';

  bgAnime.forEach(bg => bg.classList.remove('animated-bg'));
  bgAnimeText.forEach(bg => bg.classList.remove('animated-bg-text'));
};
setTimeout(load, 2500);

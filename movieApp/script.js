const API_KEY = '&api_key=c8e5826dd8f28c4931f88d393d616bde';
const API_URL = 'https://api.themoviedb.org/3';
const API_IMG = 'https://image.tmdb.org/t/p/w1280';
const API_POPULARITY = `/discover/movie?sort_by=popularity.desc`;
const API_SEARCH = `/search/movie?query=`;

const main = document.querySelector('.main');
const search = document.querySelector('.search');
const searchInput = document.querySelector('.search__input');
const navList = document.querySelector('.nav__list');

navList.addEventListener('click', function (e) {
  const btn = e.target;
  getJSON(API_URL + btn.dataset.url + API_KEY);
});

search.addEventListener('submit', function (e) {
  e.preventDefault();
  getJSON(API_URL + API_SEARCH + searchInput.value + API_KEY);
});

const getJSON = async function (call) {
  try {
    const res = await fetch(call);
    const data = await res.json();
    const { results } = data;

    main.innerHTML = '';
    results.forEach(movie => {
      const { title, vote_average, poster_path, overview } = movie;

      const movieStr = `
          <img
            class="movie__pic"
            src="${API_IMG + poster_path}"
          />
        
          <div class="movie__details">
            <div class="movie__title">${title}</div>
            <div class="movie__rating ${
              vote_average > 8 ? 'green' : vote_average > 4 ? 'orange' : 'red'
            }">${vote_average}</div>
          </div>
          <div class="overview">
            <h3>Overview</h3>
            <p>${overview}</p>
          </div>
          `;
      const movieEl = document.createElement('div');
      movieEl.classList.add('movie');
      movieEl.innerHTML = movieStr;
      main.appendChild(movieEl);
    });
  } catch (err) {
    console.error(err);
  }
};
getJSON(API_URL + API_POPULARITY + API_KEY);

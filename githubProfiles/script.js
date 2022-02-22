const API = 'https://api.github.com/users/';

const main = document.querySelector('.main');
const search = document.querySelector('.search');
const searchInput = document.querySelector('.search__input');

searchInput.focus();

search.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputUsername = searchInput.value;
  searchInput.value = '';
  fetchUser(inputUsername);
});

const fetchApI = async function (query) {
  try {
    const res = await axios(`${API}${query}`, {
      Headers: { authorization: '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' },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};

const fetchUser = async function (username) {
  main.innerHTML = '';
  const loadingEl = document.createElement('h2');
  loadingEl.innerText = 'loading...';
  main.appendChild(loadingEl);

  try {
    const data = await Promise.all([
      fetchApI(username),
      fetchApI(username + '/repos?sort=created'),
    ]);
    const user = data[0];
    const repos = data[1];

    const cardHtml = `
        <div class="card__img">
          <img
            src="${user.avatar_url}"
            alt="user img"
          />
        </div>
        <div class="card__info">
          <h2>${user.name}</h2>
          <p>${user.bio}
          </p>
          <ul class="card__list">
            <li>
              <span>${user.followers}<strong>Followers </strong></span>
            </li>
            <li>
              <span>${user.following} <strong>Following </strong></span>
            </li>
            <li>
              <span>${user.public_repos} <strong>Repos</strong></span>
            </li>
          </ul>
          <div class="repos">
          ${repos
            .slice(0, 5)
            .map(
              repo =>
                `<div class="repo"><a href="${repo.html_url}" target="_blank">${repo.name}</a></div>`
            )
            .join('')}
          </div>
        </div>
        `;
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = cardHtml;
    main.appendChild(card);
  } catch (err) {
    console.log(err);
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<h1>${
      err.response.status === 404 ? 'Invalid username' : err
    }</h1>`;
    main.appendChild(card);
  } finally {
    loadingEl.remove();
  }
};

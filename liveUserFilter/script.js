const resultsContainer = document.querySelector('.results');
const search = document.querySelector('.header__search');

const TOTAL__USERS = 25;
const API = 'https://randomuser.me/api/?results=' + TOTAL__USERS;

const listItems = [];

const getUsersJSON = async function () {
  const res = await fetch(API);
  const data = await res.json();
  return data;
};

const createUsers = async function () {
  const { results } = await getUsersJSON();
  resultsContainer.innerHTML = '';
  results.forEach(user => {
    const userEl = document.createElement('li');
    userEl.className = 'result';
    const userHTML = `
    <img
    src="${user.picture.thumbnail}"
    alt=""
    class="result__img"
    />
    <h4 class="result__name">${user.name.first} ${user.name.last}</h4>
    <p class="result__location">${user.location.city}, ${user.location.country}</p>
    `;
    listItems.push(userEl);
    userEl.innerHTML = userHTML;
    resultsContainer.appendChild(userEl);
  });
};
createUsers();

search.addEventListener('input', function (e) {
  const query = e.target.value.toLowerCase();
  listItems.forEach(item => {
    if (item.innerText.toLowerCase().includes(query)) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
});

const pokeContainer = document.querySelector('.poke-container');
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
};

const LOAD__RATE = 30;
let loadCount = 0;
let pokemonEl;

const getPokemonJSON = async function (id) {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
    const json = await res.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};

const createPokemon = function (pokemon) {
  const types = pokemon.types.map(el => el.type.name);
  const type = Object.keys(colors).find(t => types.indexOf(t) > -1);
  const color = colors[type];
  const pokemonHtml = `
      <div class="pokemon__img">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            pokemon.id
          }.png"
          alt="${pokemon.name}"
        />
      </div>
      <div class="pokemon__info">
        <span class="pokemon__number">#${pokemon.id
          .toString()
          .padStart(3, 0)}</span>
        <h4 class="pokemon__name">${
          pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
        }</h4>
        <small class="pokemon__type">
          <span>Type:</span>
          <span class="pokemon__type--text">${type}</span>
        </small>
      </div>
      `;
  pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');
  pokemonEl.innerHTML = pokemonHtml;
  pokemonEl.style.backgroundColor = color;
  pokeContainer.appendChild(pokemonEl);
};

const oberserver = new IntersectionObserver(
  function (entries) {
    if (!entries[0].isIntersecting) return;
    oberserver.unobserve(pokemonEl);
    init();
  },
  {
    root: null,
    threshold: 1,
  }
);

const init = async function () {
  // for (let i = 1; i <= LOAD__RATE; i++) {
  for (
    let i = loadCount * LOAD__RATE + 1;
    i <= LOAD__RATE * (loadCount + 1);
    i++
  ) {
    const pokemon = await getPokemonJSON(i);
    createPokemon(pokemon);

    if (i === LOAD__RATE * (loadCount + 1)) {
      oberserver.observe(pokemonEl);
    }
  }
  loadCount++;
};
init();

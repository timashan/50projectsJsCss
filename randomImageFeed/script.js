const container = document.querySelector('.container');

const URL = 'https://source.unsplash.com/random';
const TOTAL_IMGS = 12;

const randomUrl = function () {
  const scale = () => Math.floor(Math.random() * 201) + 300;
  return `${URL}/${scale()}x${scale()}`;
};

const observer = new IntersectionObserver(
  function (entries) {
    if (!entries[0].isIntersecting) return;
    init();
  },
  {
    root: null,
    threshold: 1,
  }
);

const init = function () {
  for (let i = 1; i <= TOTAL_IMGS; i++) {
    const img = document.createElement('img');
    img.src = randomUrl();
    container.appendChild(img);
    if (TOTAL_IMGS === i) observer.observe(img);
  }
};
init();

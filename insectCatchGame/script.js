const btnStart = document.querySelector('.btn--start');
const insectList = document.querySelector('.insect-list');
const time = document.querySelector('.time');
const scoreEl = document.querySelector('.score');
const message = document.querySelector('.message');
const gameContainer = document.querySelector('.game-container');

let seconds = 0;
let score = 0;
let selectedInsect;

btnStart.addEventListener('click', function (e) {
  this.closest('.screen').classList.add('up');
});

insectList.addEventListener('click', function (e) {
  const btn = e.target.closest('.btn');
  if (!btn) return;

  selectedInsect = btn.querySelector('.insect-img');
  btn.closest('.screen').classList.add('up');
  startGame();
});

const runTime = function () {
  ++seconds;
  const min = Math.floor(seconds / 60) + '';
  const sec = (seconds % 60) + '';
  time.innerText = `Time: ${min.padStart(2, 0)}:${sec.padStart(2, 0)}`;
};

const createInsect = function () {
  const insect = document.createElement('div');
  insect.classList.add('insect');
  const img = selectedInsect.cloneNode(true);
  insect.append(img);
  insect.style.top = `${Math.random() * (window.innerHeight - 200) + 100}px`;
  insect.style.left = `${Math.random() * (window.innerWidth - 200) + 100}px`;
  img.style.transform = `rotate(${Math.random() * 360}deg)`;
  setTimeout(() => gameContainer.append(insect), 1000);
};

const startGame = function () {
  setInterval(runTime, 1000);
  createInsect();
};

gameContainer.addEventListener('click', function (e) {
  const insect = e.target.closest('.insect');
  if (!insect) return;
  insect.classList.add('caught');
  setTimeout(() => insect.remove(), 500);
  scoreEl.innerText = `Score: ${++score}`;
  if (score >= 20) message.classList.add('visible');
  createInsect() || createInsect();
});

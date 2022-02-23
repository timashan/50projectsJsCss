const loveMe = document.querySelector('.love-me');
const countEl = document.querySelector('.count');

let clickTime = 0;
let count = 0;

const createHeart = function (e) {
  const target = e.target.closest('.love-me');

  const heart = document.createElement('i');
  heart.className = 'fas fa-heart';
  const x = e.clientX - target.offsetLeft;
  const y = e.clientY - target.offsetTop;

  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  loveMe.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);

  countEl.innerText = ++count;
};

loveMe.addEventListener('click', function (e) {
  if (Date.now() - clickTime < 800) {
    createHeart(e);
    clickTime = 0;
  } else {
    clickTime = Date.now();
  }
});

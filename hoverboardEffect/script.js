const container = document.querySelector('.container');
const TOTAL_SQUARES = 500;
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

for (let i = 0; i < TOTAL_SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);
}

let square;

const resetSquare = function () {
  if (!square) return;
  square.style.backgroundColor = '#1d1d1d';
  square.style.boxShadow = `0 0 2px #000`;
};

container.addEventListener('mouseover', function (e) {
  resetSquare();
  square = e.target.closest('.square');
  if (!square) return;

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  square.style.backgroundColor = `${randomColor}`;
  square.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`;
});

container.addEventListener('mouseleave', function () {
  resetSquare();
});

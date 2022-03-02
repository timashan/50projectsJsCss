const container = document.querySelector('.container');
const TOTAL_SQUARES = 500;
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

for (let i = 0; i < TOTAL_SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);

  square.addEventListener('mouseover', function (e) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.style.backgroundColor = `${randomColor}`;
    this.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`;
  });

  square.addEventListener('mouseleave', function (e) {
    this.style.backgroundColor = '#1d1d1d';
    this.style.boxShadow = `0 0 2px #000`;
  });
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const toolbox = document.querySelector('.toolbox');
const sizeEl = document.querySelector('.size');
const colorEl = document.querySelector('.color');

let size = 10;
let color = colorEl.value;
let x, y;
let isPressed = false;
sizeEl.innerText = size;

toolbox.addEventListener('click', function (e) {
  const target = e.target;
  if (target.closest('.decrease') && size > 5) {
    size -= 5;
    sizeEl.innerText = size;
  }
  if (target.closest('.increase') && size < 50) {
    size += 5;
    sizeEl.innerText = size;
  }
  if (target.closest('.clear')) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  if (target.closest('.fill')) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
});

colorEl.addEventListener('change', function (e) {
  color = colorEl.value;
});

canvas.addEventListener('mousedown', function (e) {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseup', function (e) {
  isPressed = false;
});

canvas.addEventListener('mousemove', function (e) {
  if (isPressed) {
    let x2 = e.offsetX;
    let y2 = e.offsetY;
    drawCircle(x, y, size, color);
    drawLine(x, y, x2, y2, size, color);
    x = e.offsetX;
    y = e.offsetY;
    console.log(x, y, x2, y2);
  }
});

const drawCircle = function (x, y, size, color) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
};

const drawLine = function (x, y, x2, y2, size, color) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
};

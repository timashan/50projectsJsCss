const boxContainer = document.querySelector('.boxes');
const btnMagic = document.querySelector('.btn');

btnMagic.addEventListener('click', function () {
  boxContainer.classList.toggle('big');
});

const createBoxes = function () {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div');
      box.className = 'box';
      box.style.backgroundPosition = `-${j * 12.5}rem -${i * 12.5}rem`;
      boxContainer.appendChild(box);
    }
  }
};
createBoxes();

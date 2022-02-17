const cupBig = document.querySelector('.cup');
const percentage = document.querySelector('.percentage');
const liters = document.querySelector('.liters');
const remained = document.querySelector('.remained');

const cupsSmall = document.querySelectorAll('.cup--small');
const cupsFull = document.getElementsByClassName('full');
const cupsContainer = document.querySelector('.cups');

const totalCups = cupsSmall.length;

cupsContainer.addEventListener('click', function (e) {
  const cup = e.target.closest('.cup');
  if (!cup) return;
  let index = [...cupsSmall].findIndex((c, i) => c === cup);

  if (cupsFull.length - 1 === index) {
    index--;
  }

  cupsSmall.forEach((cup, idx) => {
    if (idx <= index) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  const cupFilled = (cupsFull.length / totalCups) * 100;
  percentage.style.height = `${cupFilled}%`;
  percentage.innerText = `${cupFilled}%`;
  liters.innerText = `${2 - (cupsFull.length / totalCups) * 2}L`;
});

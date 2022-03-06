const range = document.querySelector('.range');

range.addEventListener('input', function (e) {
  const val = +this.value;
  const trackWidth = +getComputedStyle(this).width.slice(0, -2);
  const thumbWidth = +getComputedStyle(this.nextElementSibling).width.slice(
    0,
    -2
  );
  const min = this.min;
  const max = this.max;

  this.nextElementSibling.innerText = val;
  this.nextElementSibling.style.left = `${
    (val * trackWidth) / max - thumbWidth / 2 + (-20 * (val / max) + 10)
  }px`;
});

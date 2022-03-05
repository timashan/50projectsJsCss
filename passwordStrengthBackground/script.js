const password = document.getElementById('password');
const background = document.querySelector('.background');

password.addEventListener('input', function () {
  const length = this.value.length;
  background.style.filter = `blur(${20 - length * 2}px)`;
});

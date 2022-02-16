const insert = document.querySelector('.insert');

window.addEventListener('keydown', function (event) {
  insert.innerHTML = `
<div class="key">${
    event.key !== ' ' ? event.key : 'Space'
  }<small>event.key</small></div>
<div class="key">${event.keyCode}<small>event.keyCode</small></div>
<div class="key">${event.code}<small>event.code</small></div>
`;
  console.log(event);
});

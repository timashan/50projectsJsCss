const panel = document.querySelector('.panel');
const ratingsContainer = document.querySelector('.ratings');
const btnSend = document.querySelector('.btn--send');

let btnSelect = 'Satisfied';

ratingsContainer.addEventListener('click', function (e) {
  const btn = e.target.closest('.rating');
  if (!btn) return;
  [...ratingsContainer.children].forEach(btn => btn.classList.remove('active'));
  btn.classList.add('active');
  btnSelect = btn.innerText;
});

btnSend.addEventListener('click', function () {
  const html = `
  <i class="fas fa-heart"></i>
  <strong>Thank You!</strong>
  <br/>
  <strong>Feedback: ${btnSelect}</strong><br/>
  <p>We'll use your feedback to improve our customer support</p>
    `;
  panel.innerHTML = html;
});

const codeContainer = document.querySelector('.code-container');
const codes = document.querySelectorAll('.code');
codes[0].focus();

codeContainer.addEventListener('keydown', function (e) {
  const codeEl = e.target;
  codeEl.value = '';

  if (isFinite(e.key)) setTimeout(() => codeEl.nextElementSibling?.focus(), 0);

  if (e.key === 'Backspace')
    setTimeout(() => codeEl.previousElementSibling?.focus(), 0);
});

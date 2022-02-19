document.body.addEventListener('click', function (e) {
  const btn = e.target.closest('.ripple');
  if (!btn) return;
  const btnTop = e.clientY - btn.offsetTop;
  const btnLeft = e.clientX - btn.offsetLeft;

  const circle = document.createElement('span');
  circle.classList.add('circle');
  circle.style.top = `${btnTop}px`;
  circle.style.left = `${btnLeft}px`;
  btn.appendChild(circle);
  setTimeout(() => circle.remove(), 800);
});

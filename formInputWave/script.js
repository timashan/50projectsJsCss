const labels = document.querySelectorAll('.label');

labels.forEach(label => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${50 * idx}ms">${letter}</span>`
    )
    .join('');
});

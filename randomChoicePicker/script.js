const input = document.querySelector('.input');
const tagContainer = document.querySelector('.tags');
const tagEls = document.getElementsByClassName('tag');
input.focus();

const timing = function (sec) {
  return new Promise(function (resolve, _) {
    setTimeout(resolve, sec);
  });
};

const randomSelect = function (off = false) {
  const tag = tagEls[Math.floor(Math.random() * tagEls.length)];
  tag.classList.add('highlight');
  // setTimeout(() => {
  //   if (off) return;
  //   tag.classList.remove('highlight');
  // }, 100);
  timing(100).then(() => {
    if (off) return;
    tag.classList.remove('highlight');
  });
};

const randomizer = function () {
  const timer = setInterval(() => {
    randomSelect();
  }, 100);
  //   setTimeout(() => {
  //     clearInterval(timer);
  //     setTimeout(randomSelect.bind(null, true), 100);
  //   }, 30 * 100);

  timing(30 * 100)
    .then(() => {
      clearInterval(timer);
      return timing(100);
    })
    .then(() => randomSelect(true));
};

input.addEventListener('keyup', function (e) {
  if (input.value.trim() === '') return (input.value = '');

  if (e.key === 'Enter') {
    input.value = '';
    randomizer();
    return;
  }

  const tags = input.value
    .split(',')
    .filter(ent => ent.trim() !== '')
    .map(ent => ent.trim());

  tagContainer.innerHTML = '';
  tags.forEach(tag => {
    const span = document.createElement('span');
    span.classList.add('tag');
    span.innerText = tag;
    tagContainer.appendChild(span);
  });
});

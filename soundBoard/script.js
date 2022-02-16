const buttons = document.querySelector('.buttons');
const audio = document.querySelectorAll('audio');

const sounds = [...audio].map(aud => aud.id);

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;
  buttons.append(btn);
});

const reset = function () {
  audio.forEach(aud => {
    aud.pause();
    aud.currentTime = 0;
  });
  [...buttons.children].forEach(btn => btn.classList.remove('playAnim'));
};

buttons.addEventListener('click', function (e) {
  if (!e.target.closest('.btn')) return;
  const audio = document.getElementById(e.target.innerText);
  reset();
  audio.play();
  e.target.classList.add('playAnim');

  audio.addEventListener('ended', function () {
    e.target.classList.remove('playAnim');
  });
});

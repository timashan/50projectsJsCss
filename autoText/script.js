const speedEl = document.getElementById('speed');
const autoText = document.querySelector('.autotext');

const text = 'We Love Programming!';
let idx = 1;
let speed = 300;

speedEl.addEventListener('input', e => (speed = 300 / e.target.value));

const removeText = function () {
  return new Promise(function (resolve) {
    const remove = () => {
      idx--;
      autoText.innerText = text.slice(0, idx);
      if (idx === 0) return setTimeout(resolve, 1000);
      setTimeout(remove, 50);
    };
    setTimeout(remove, 2000);
  });
};

const writeText = async function () {
  autoText.innerText = text.slice(0, idx);
  idx++;
  if (idx > text.length) {
    await removeText();
    idx = 1;
  }
  setTimeout(writeText, speed);
};

writeText();

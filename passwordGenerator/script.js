const lengthEl = document.getElementById('length');
const upperEl = document.getElementById('uppercase');
const lowerEl = document.getElementById('lowercase');
const numberEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const result = document.querySelector('.result__text');
const generateBtn = document.querySelector('.btn--generate');
const copyBtn = document.querySelector('.btn--copy');

const randomUppercaseLetter = function () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const randomLowerLetter = function () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const randomNumber = function () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

const randomSymbol = function () {
  const symbols = '!@#$%^&*(){}[]=<>/|,._-+*""`~:;?';
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const funcObj = {
  upper: randomUppercaseLetter,
  lower: randomLowerLetter,
  number: randomNumber,
  symbol: randomSymbol,
};

generateBtn.addEventListener('click', function () {
  const length = lengthEl.value;
  const upper = upperEl.checked;
  const lower = lowerEl.checked;
  const number = numberEl.checked;
  const symbol = symbolsEl.checked;

  const checked = [{ upper }, { lower }, { number }, { symbol }].filter(
    obj => Object.values(obj)[0]
  );
  if (!checked.length) return;

  let str = '';
  for (let i = 0; i < length; i += checked.length) {
    checked.forEach(ent => {
      str += funcObj[Object.keys(ent)[0]]();
    });
  }
  result.innerText = str.slice(0, length);
});

copyBtn.addEventListener('click', function () {
  if (!result.innerText) return;
  // const textarea = document.createElement('textarea');
  // textarea.value = result.innerText;
  // document.body.appendChild(textarea);
  // textarea.select();
  // document.execCommand('copy');
  // textarea.remove();
  // alert('Copied to clipboard');
  navigator.clipboard
    .writeText('hh')
    .then(() => alert('Copied to clipboard'))
    .catch(err => console.log(err));
});

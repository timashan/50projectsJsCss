const empties = document.querySelectorAll('.empty');
const container = document.querySelector('.container');
const fill = document.querySelector('.fill');

const validateEmpty = e => {
  const empty = e.target.closest('.empty');
  if (empty) return true;
};

const dragStart = function () {
  fill.className += ' fill--hold';
  setTimeout(() => (fill.className = ''), 0);
};

const dragEnd = function () {
  fill.className = 'fill';
};

const dragEnter = function (e) {
  e.preventDefault();
  if (!validateEmpty(e)) return;
  e.target.className += ' empty--hover';
};

const dragLeave = function (e) {
  if (!validateEmpty(e)) return;
  e.target.className = 'empty';
};

const dragdrop = function (e) {
  if (!validateEmpty(e)) return;
  e.target.append(fill);
  e.target.className = 'empty';
};

const dragover = function (e) {
  e.preventDefault();
};

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

container.addEventListener('dragenter', dragEnter);
container.addEventListener('dragleave', dragLeave);
container.addEventListener('drop', dragdrop);
container.addEventListener('dragover', dragover);

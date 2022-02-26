const checkboxes = document.getElementsByClassName('checkbox');
const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

document.body.addEventListener('change', function (e) {
  const checkbox = e.target.closest('.checkbox');
  if (!checkbox) return;

  const verifyAll = [...checkboxes].some(c => c.checked === false);
  if (verifyAll) return;

  if (checkbox === good) cheap.checked = false;
  if (checkbox === cheap) good.checked = false;
  if (checkbox === fast) cheap.checked = false;
});

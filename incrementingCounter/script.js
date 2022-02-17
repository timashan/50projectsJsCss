const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = 0;

  const target = +counter.dataset.target;
  const rate = Math.ceil(target / 200);

  const updateCounter = function () {
    let innerText = +counter.innerText;

    if (innerText < target) {
      counter.innerText = innerText + rate;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

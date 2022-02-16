const loadingText = document.querySelector('.loading-text');
const sectionBg = document.querySelector('.section-bg');

let loadCount = 0;
const blurring = function () {
  loadingText.innerHTML = `${loadCount}%`;
  loadingText.style.opacity = `${(100 - loadCount) / 100}`;
  sectionBg.style.filter = `blur(${((100 - loadCount) / 100) * 30}px)`;
  loadCount++;
  if (loadCount > 100) return clearInterval(interval);
};

const interval = setInterval(blurring, 30);

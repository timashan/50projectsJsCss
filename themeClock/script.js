const clock = document.querySelector('.clock');
const hourEl = document.querySelector('.clock__hand--hour');
const minuteEl = document.querySelector('.clock__hand--minute');
const secondEl = document.querySelector('.clock__hand--second');
const time = document.querySelector('.time');
const dateDay = document.querySelector('.date-day');
const dateMonth = document.querySelector('.date-month');
const toggle = document.querySelector('.toggle');
const html = document.querySelector('html');

toggle.addEventListener('click', function () {
  html.classList.toggle('dark');

  toggle.innerText =
    toggle.innerText.toLowerCase() === 'dark theme'
      ? 'light theme'
      : 'dark theme';
});

const calTime = function () {
  const date = new Date();
  const hours = date.getHours();
  const hours12 = hours % 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const month = date.getMonth();
  const day = date.getDate();

  hourEl.style.transform = `translate(-50%, -100%) rotate(
      ${(hours12 / 11) * 360}deg)`;

  minuteEl.style.transform = `translate(-50%, -100%) rotate(
        ${(minutes / 59) * 360}deg)`;

  secondEl.style.transform = `translate(-50%, -100%) rotate(
            ${(seconds / 59) * 360}deg)`;

  time.innerHTML = `<p>${hours12}:${String(minutes).padStart(2, 0)} ${
    hours >= 12 ? 'PM' : 'AM'
  }</p>`;

  const dateIntl = Intl.DateTimeFormat(navigator.language, {
    weekday: 'long',
    month: 'short',
  }).format(date);
  dateMonth.innerHTML = dateIntl;
  dateDay.innerHTML = day;
};

calTime();
setInterval(calTime, 1000);

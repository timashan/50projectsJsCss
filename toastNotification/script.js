const toastContainer = document.querySelector('.toasts');
const btn = document.querySelector('.btn');

const msgs = ['Message One', 'Message Two', 'Message Three', 'Message Four'];
const types = ['info', 'success', 'fail'];

const randomizer = arr => arr[Math.floor(Math.random() * arr.length)];

const timer = function (sec) {
  return new Promise(function (resolve, _) {
    setTimeout(resolve, 1000 * sec);
  });
};

const createNotification = function (msg, type, e) {
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerText = msg !== null ? msg : randomizer(msgs);
  toast.classList.add(type != null ? type : randomizer(types));
  toastContainer.appendChild(toast);
  timer(2.5)
    .then(() => {
      toast.classList.add('hide');
      return timer(1);
    })
    .then(() => toast.remove());
};

btn.addEventListener('click', createNotification.bind(null, null, null));

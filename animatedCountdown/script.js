const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const final = document.querySelector('.final');
const btnReplay = document.querySelector('.btn--replay');

const reset = function () {
  nums.forEach(num => (num.className = ''));
  counter.classList.remove('hide');
  final.classList.remove('show');

  nums[0].className = 'in';
};

btnReplay.addEventListener('click', function () {
  reset();
});

const playAnimation = function () {
  nums.forEach(num => {
    num.addEventListener('animationend', function (e) {
      const anim = e.animationName;
      const target = e.target;

      if (anim === 'in' && target.nextElementSibling) {
        target.classList.remove('in');
        target.classList.add('out');
      }
      if (anim === 'out' && target.nextElementSibling) {
        target.nextElementSibling.classList.add('in');
      }
      if (!target.nextElementSibling) {
        counter.classList.add('hide');
        final.classList.add('show');
      }
    });
  });
};
playAnimation();

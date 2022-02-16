const boxes = document.querySelectorAll('.box');

// const scrollBoxes = function () {
//   const triggerBottom = window.innerHeight * (4 / 5);
//   boxes.forEach(box =>
//     box.getBoundingClientRect().top < triggerBottom
//       ? box.classList.add('active')
//       : box.classList.remove('active')
//   );
// };
// scrollBoxes();

// window.addEventListener('scroll', scrollBoxes);

const scrollBoxes = function (entries) {
  entries.forEach(ent =>
    ent.isIntersecting
      ? ent.target.classList.add('active')
      : ent.target.classList.remove('active')
  );
};

const observer = new IntersectionObserver(scrollBoxes, {
  root: null,
  threshold: 0,
});

boxes.forEach(box => observer.observe(box));

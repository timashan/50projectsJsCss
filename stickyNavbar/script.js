const navigation = document.querySelector('.navigation');
const hero = document.querySelector('.hero');

// window.addEventListener('scroll', function (e) {
//   if (this.scrollY > navigation.offsetHeight + 150) {
//     navigation.classList.add('active');
//   } else {
//     navigation.classList.remove('active');
//   }
// });

const observer = new IntersectionObserver(
  function (e) {
    if (e[0].isIntersecting) {
      navigation.classList.remove('active');
    } else {
      navigation.classList.add('active');
    }
  },
  {
    root: null,
    threshold: 0.8,
  }
);
observer.observe(hero);

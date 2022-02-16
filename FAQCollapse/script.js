const faqContainer = document.querySelector('.faq-container');

faqContainer.addEventListener('click', function (e) {
  const faq = e.target.closest('.faq__toggle');
  if (!faq) return;
  faq.parentNode.classList.toggle('active');
});

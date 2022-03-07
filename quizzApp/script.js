const quizContainer = document.querySelector('.quiz-container');
const btnSubmit = document.querySelector('.btn--submit');
const question = document.querySelector('.question');
const answers = document.querySelectorAll('.answer');
const radios = document.querySelectorAll('input[type="radio"]');

const quizData = [
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
];

let current = 0;
let score = 0;

const loadQuestion = function () {
  question.innerText = quizData[current].question;
  answers.forEach(
    (ans, idx) =>
      (ans.innerText = quizData[current][String.fromCharCode(97 + idx)])
  );
};
loadQuestion();

btnSubmit.addEventListener('click', function () {
  const selected = [...radios].find(r => r.checked);
  const answer = selected?.id;
  if (!answer) return;
  selected.checked = false;

  if (answer === quizData[current].correct) ++score;

  if (current === quizData.length - 1)
    return (quizContainer.innerHTML = `
    <h3>You answered ${score}/${quizData.length} questions correctly</h3>
    <button class="btn" onClick="location.reload()">Reload</button>
      `);

  ++current;
  loadQuestion();
});

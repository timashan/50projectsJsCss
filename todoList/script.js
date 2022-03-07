const todoInput = document.querySelector('.todo__input');
const todoContainer = document.querySelector('.todos');
const form = document.querySelector('.form');

const createTodo = function (val, completed = false) {
  const todoEl = document.createElement('li');
  todoEl.innerText = val;
  todoInput.value = '';
  todoContainer.appendChild(todoEl);
  if (completed) todoEl.classList.add('completed');
};

const todos = JSON.parse(localStorage.getItem('todos'));
if (todos) {
  todos.forEach(todo => createTodo(todo.text, todo.completed));
}

const saveTodos = function () {
  const todoEls = [...todoContainer.children].map(el => {
    return {
      text: el.innerText,
      completed: el.classList.contains('completed'),
    };
  });
  localStorage.setItem('todos', JSON.stringify(todoEls));
};

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const val = todoInput.value;
  if (!val) return;
  createTodo(val);
  saveTodos();
});

todoContainer.addEventListener('click', function (e) {
  e.target.classList.toggle('completed');
  saveTodos();
});

todoContainer.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  e.target.remove();
  saveTodos();
});

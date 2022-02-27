const btnAdd = document.querySelector('.btn--add');
const btnRemoveAll = document.querySelector('.btn--remove-all');
const textareas = document.getElementsByClassName('textarea');

btnRemoveAll.addEventListener('click', function () {
  localStorage.removeItem('notes');
  location.reload();
});

const createNote = function (text = '') {
  const note = document.createElement('div');
  note.classList.add('note');
  const html = `
        <div class="tools">
        <button class="btn btn--edit"><i class="fas fa-edit"></i></button>
        <button class="btn btn--delete">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
      <p class="main ${text ? '' : 'hidden'}">${text}</p>
      <textarea class="textarea ${text ? 'hidden' : ''}">${text}</textarea>
        `;
  note.innerHTML = html;
  document.body.appendChild(note);
};

const notes = JSON.parse(localStorage.getItem('notes'));
if (notes) notes.forEach(text => createNote(text));

const saveNotes = function () {
  const notes = [...textareas].map(el => el.value);
  localStorage.setItem('notes', JSON.stringify(notes));
};

btnAdd.addEventListener('click', function () {
  createNote();
});

document.addEventListener('click', function (e) {
  const note = e.target.closest('.note');
  if (!note) return;
  const main = note.querySelector('.main');
  const textarea = note.querySelector('.textarea');

  const btn = e.target;
  if (btn.closest('.btn--delete')) {
    note.remove();
    saveNotes();
  }
  if (btn.closest('.btn--edit')) {
    main.classList.toggle('hidden');
    textarea.classList.toggle('hidden');
  }
});

document.addEventListener('change', function (e) {
  if (!e.target.classList.contains('textarea')) return;
  const main = e.target.parentNode.querySelector('.main');
  main.innerHTML = marked.parse(e.target.value);
  saveNotes();
});

const elAddNoteButton = document.querySelector('.form-addButton');

elAddNoteButton.addEventListener('click', onClickButtonAddNote);

function onClickButtonAddNote() {
  const elFormTextArea = document.querySelector('.form-textarea');
  if (elFormTextArea.value.trim() === '') return;

  const text = elFormTextArea.value;
  handleAddNote(text);
  elFormTextArea.value = '';
}

function onClickButtonDeleteNote(e) {
  const text = e.target.parentNode.children[0].textContent;
  handleRemoveNote(text);
}

function onDblClickEditNote(e) {
  const elParagraph = e.target;
  const elTextArea = document.createElement('textarea');

  elTextArea.value = elParagraph.textContent;
  elParagraph.replaceWith(elTextArea);
  elTextArea.focus();

  elTextArea.addEventListener('keydown', onKeyDownTextArea);
  elTextArea.addEventListener('blur', onBlurTextArea);
}

function renderNotesList(notesList) {
  const elNoteList = document.querySelector('.notes');
  elNoteList.innerHTML = '';

  for (const text of notesList) {
    renderNote(text);
  }
}

function renderNote(text) {
  const elNoteList = document.querySelector('.notes');
  const elNote = generateNote(text);

  elNoteList.appendChild(elNote);
}

function onKeyDownTextArea(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    saveNoteChanges(e.target);
  }
}

function onBlurTextArea(e) {
  saveNoteChanges(e.target);
}

function saveNoteChanges(elTextArea) {
  const text = elTextArea.value.trim();
  if (text === '') return;

  const elParagraph = document.createElement('p');
  elParagraph.classList.add('notes-text');
  elParagraph.textContent = text;

  elParagraph.addEventListener('dblclick', onDblClickEditNote);
  elTextArea.replaceWith(elParagraph);
}

function renderNotesCount(notesCount) {
  const elNotesCount = document.querySelector('.notes-count');
  elNotesCount.textContent = `Всего заметок: ${notesCount}`;
}

function generateNote(text) {
  const elDiv = document.createElement('div');
  const elParagraph = document.createElement('p');
  const elButtonDelete = document.createElement('button');

  elDiv.classList.add('notes-card');
  elParagraph.classList.add('notes-text');
  elButtonDelete.classList.add('notes-deleteButton');

  elParagraph.textContent = text;
  elButtonDelete.textContent = 'Удалить';

  elDiv.appendChild(elParagraph);
  elDiv.appendChild(elButtonDelete);

  elParagraph.addEventListener('dblclick', onDblClickEditNote);
  elButtonDelete.addEventListener('click', onClickButtonDeleteNote);

  return elDiv;
}

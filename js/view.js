const elAddNoteButton = document.querySelector('.form-addButton')

elAddNoteButton.addEventListener('click', onClickButtonAddNote)

function onClickButtonAddNote() {
  const elFormTextArea = document.querySelector('.form-textarea')

  if (elFormTextArea.value.trim() === '') return

  const text = elFormTextArea.value

  handleAddNote(text)

  elFormTextArea.value = ''
}

function onClickButtonDeleteNote(e) {
  const text = e.target.parentNode.children[0].textContent

  handleRemoveNote(text)
}

function onDblClickEditNote(e) {
  const elParagraph = e.target
  const elTextArea = document.createElement('textarea')
  const oldText = elParagraph.textContent

  elTextArea.value = oldText

  elParagraph.replaceWith(elTextArea)
  elTextArea.focus()

  elTextArea.addEventListener('keydown', handleKeyDownTextArea)
  elTextArea.addEventListener('blur', handleBlurTextArea)

  elTextArea.oldText = oldText
}

function onKeyDownTextArea(e, elTextArea, oldText) {
  if (e.key === 'Enter') {
    e.preventDefault()

    saveNoteChanges(elTextArea, oldText)
  }
}

function onBlurTextArea(e, elTextArea, oldText) {
  saveNoteChanges(elTextArea, oldText)
}

function renderNotesList(notesList) {
  const elNoteList = document.querySelector('.notes')
  elNoteList.innerHTML = ''

  for (const text of notesList) {
    renderNote(text)
  }
}

function renderNote(text) {
  const elNoteList = document.querySelector('.notes')
  const elNote = generateNote(text)

  elNoteList.appendChild(elNote)
}

function renderNotesCount(notesCount) {
  const elNotesCount = document.querySelector('.notes-count')

  elNotesCount.textContent = `Всего заметок: ${notesCount}`
}

function saveNoteChanges(elTextArea, oldText) {
  const newText = elTextArea.value.trim()
  if (newText === '') return

  const elParagraph = document.createElement('p')
  elParagraph.classList.add('notes-text')
  elParagraph.textContent = newText

  elParagraph.addEventListener('dblclick', onDblClickEditNote)
  elTextArea.replaceWith(elParagraph)

  handleUpdateNote(oldText, newText)
}

function generateNote(text) {
  const elDiv = document.createElement('div')
  const elParagraph = document.createElement('p')
  const elButtonDelete = document.createElement('button')

  elDiv.classList.add('notes-card')
  elParagraph.classList.add('notes-text')
  elButtonDelete.classList.add('notes-deleteButton')

  elParagraph.textContent = text
  elButtonDelete.textContent = 'Удалить'

  elDiv.appendChild(elParagraph)
  elDiv.appendChild(elButtonDelete)

  elButtonDelete.addEventListener('click', onClickButtonDeleteNote)
  elParagraph.addEventListener('dblclick', onDblClickEditNote)

  return elDiv
}

const elButtonAddNote = document.querySelector('.form-addButton')
elButtonAddNote.addEventListener('click', onClickButtonAddNote)

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

function onDblClickP(e) {
  const elP = e.target
  renderNoteP(elP)
}

function renderNoteP(elP) {
  const oldText = elP.textContent
  const elTextarea = generateTextarea(oldText)
  elP.replaceWith(elTextarea)
  elTextarea.focus()
}

function onBlurTextarea(e) {
  const idx = Array.from(e.target.parentNode.parentNode.children).indexOf(
    e.target.parentNode
  )
  const newText = e.target.value
  handleUpdateNote(idx, newText)
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

function generateTextarea(text) {
  const elTextarea = document.createElement('textarea')
  elTextarea.value = text
  elTextarea.addEventListener('blur', onBlurTextarea)
  return elTextarea
}

function generateParagraph(text) {
  const elP = document.createElement('p')
  elP.classList.add('notes-text')
  elP.textContent = newText
  elP.addEventListener('dblclick', onDblClickP)
  return elP
}

function generateNote(text) {
  const elDiv = document.createElement('div')
  const elP = document.createElement('p')
  const elButtonDelete = document.createElement('button')

  elDiv.classList.add('notes-card')
  elP.classList.add('notes-text')
  elButtonDelete.classList.add('notes-deleteButton')

  elP.textContent = text
  elButtonDelete.textContent = 'Удалить'

  elDiv.appendChild(elP)
  elDiv.appendChild(elButtonDelete)

  elButtonDelete.addEventListener('click', onClickButtonDeleteNote)
  elP.addEventListener('dblclick', onDblClickP)

  return elDiv
}

// elTextarea.addEventListener('keydown', onKeyDownTextArea)

// function onKeydownTextarea(e, elTextArea, oldText) {
//   if (e.key === 'Enter') {
//     e.preventDefault()
//     saveNoteChanges(elTextArea, oldText)
//   }
// }

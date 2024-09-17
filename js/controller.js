function handleAddNote(text) {
  addNote(text)

  renderNotesList(notes)

  renderNotesCount(notesCount)
}

function handleRemoveNote(text) {
  removeNote(text)

  renderNotesList(notes)

  renderNotesCount(notesCount)
}

function handleUpdateNote(oldText, newText) {
  updateNote(oldText, newText)

  renderNotesList(notes)

  renderNotesCount(notesCount)
}

function handleKeyDownTextArea(e) {
  const elTextArea = e.target
  const oldText = elTextArea.oldText

  onKeyDownTextArea(e, elTextArea, oldText)
}

function handleBlurTextArea(e) {
  const elTextArea = e.target
  const oldText = elTextArea.oldText

  onBlurTextArea(e, elTextArea, oldText)
}

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

function handleUpdateNote(idx, newText) {
  updateNote(idx, newText)
  renderNotesList(notes)
  renderNotesCount(notesCount)
}

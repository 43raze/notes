let notesCount = 0
const notes = []

function calcNotesCount() {
  notesCount = notes.length
}

function addNote(note) {
  notes.push(note)
  calcNotesCount()
}

function removeNote(note) {
  const indexNotes = notes.indexOf(note)
  if (indexNotes > -1) {
    notes.splice(indexNotes, 1)
  }
  calcNotesCount()
}

function updateNote(noteIdx, newNote) {
  if (noteIdx > -1) {
    notes[noteIdx] = newNote
  }
}

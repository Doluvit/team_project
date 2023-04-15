const KEY_STORAGE = 'data-storage';

function addNote(note) {
  const arrNotes = getNotes();
  arrNotes.push(note);
  localStorage.setItem(KEY_STORAGE, JSON.stringify(arrNotes));
}

function getNotes() {
  return JSON.parse(localStorage.getItem(KEY_STORAGE)) || [];
}

export default { addNote, getNotes };

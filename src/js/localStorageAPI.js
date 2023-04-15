const KEY_STORAGE = 'data-storage';

function addNote(note) {
  const arrNotes = JSON.parse(localStorage.getItem(KEY_STORAGE)) || [];
  arrNotes.push(note);
  localStorage.setItem(KEY_STORAGE, JSON.stringify(arrNotes));
}

export default { addNote };

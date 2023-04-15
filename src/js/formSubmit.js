import { createNote } from './createNote';
import localStorageAPI from './localStorageAPI';
import { renderNotes } from './renderNotes';

export function formSubmit(e) {
  e.preventDefault();
  localStorageAPI.addNote(createNote(e));
  renderNotes(localStorageAPI.getNotes());
  e.currentTarget.reset();

}

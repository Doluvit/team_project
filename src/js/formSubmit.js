import { createNote } from './createNote';
import localStorageAPI from './localStorageAPI';

export function formSubmit(e) {
  e.preventDefault();
  localStorageAPI.addNote(createNote(e));
  e.currentTarget.reset();
}

import { createNote } from "./createNote";


export function formSubmit(e) {
  e.preventDefault();
   console.log(createNote(e));
}


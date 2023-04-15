import localStorageAPI from "./localStorageAPI";
import refs from "./refs";

export function renderNotes(notes) {
    const markup = notes.map((elem) => 
        `<li class="task-list-item">
        <button class="task-list-item-btn">Удалить</button>
         <h3>Заголовок</h3>
        <p>Текст</p>
        </li>`
    ).join("");
    refs.list.innerHTML = "";
    refs.list.insertAdjacentHTML("beforeend", markup);    
}


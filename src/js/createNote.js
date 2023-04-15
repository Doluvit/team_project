export function createNote(e) {
    const note = { id: Date.now() };
    new FormData(e.currentTarget).forEach((value, name) => {
        note[name] = value;
        
    });
    return note;
}
export function getAllNotes (req, res) {
    res.status(200).send("You just fetched all notes");
}

export function createNote (req, res) {
    res.status(201).send("You just created a note");
}

export function updateNote (req, res) {
    res.status(200).send("You just updated a note");
}

export function deleteNote (req, res) {
    res.status(204).send("You just deleted a note");
}
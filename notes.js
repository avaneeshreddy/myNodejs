console.log('Starting notes.js');
const fs = require('fs');

const fetchNotes = () =>{
    try{
        //fethcing if notes-data.json exists
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
        return notes;
    }catch(e){
        return [];
    }
}

const saveNotes = (notes) =>{
    fs.writeFileSync('notes-data.json', JSON.stringify(notes)); //converts to string and saves to file
}

const addNote = (tittle, body) =>{
    let notes = fetchNotes();
    let note ={
        tittle,
        body
    };

    //checking for duplicates before einserting new note
    let duplicateNote = notes.filter((note) => note.tittle === tittle);
    
    if (duplicateNote.length === 0) {
        notes.push(note);   //pushes notes to array
        saveNotes(notes);
        return note;
    }
}

var getAll = () => {
    console.log("getting all notes");
}

var getNote = (tittle) => {
    let notes = fetchNotes();
    const extractNote =  notes.filter((note) => note.tittle === tittle);
    return extractNote[0];
}

const remove = (tittle) => {
    const notes = fetchNotes();
    const filteredNotes = notes.filter((note) => note.tittle !== tittle);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
}

const logNotes = (note) =>{
    console.log('--');
    console.log(`Tittle: ${note.tittle}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    remove,
    logNotes
}
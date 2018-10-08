console.log('Starting notes.js');
const fs = require('fs');

var addNote = (tittle, body) =>{
    console.log(`Adding tittle ${tittle} with body "${body}"`);
    let notes = [];
    let note ={
        tittle,
        body
    };

    try{
        //fethcing if notes-data.json exists
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    }catch(e){

    }

    //checking for duplicates before einserting new note
    let duplicateNote = notes.filter((note) => note.tittle === tittle);
    
    if (duplicateNote.length === 0) {
        notes.push(note);   //pushes notes to array
        fs.writeFileSync('notes-data.json', JSON.stringify(notes)); //converts to string and saves to file
    }else{
        console.log(`Duplicate Note "${tittle}" already exists`);
    }
}

var getAll = () => {
    console.log("getting all notes");
}

var getNote = (tittle) => {
    console.log(`you have entered ${tittle} to read`);
}

var remove = (tittle) => {
    console.log(`Tittle ${tittle} removed`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    remove
}
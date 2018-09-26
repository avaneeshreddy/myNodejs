console.log('Starting notes.js');

var addNote = (tittle, body) =>{
    console.log(`Adding tittle ${tittle} with body "${body}"`);
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
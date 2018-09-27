// var obj = {
//     name : 'Alex'
// };

// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name" : "Alex", "Age" : 25}';
// var person  = JSON.parse(personString);
// console.log(typeof person);
// console.log(person.name);
// console.log(person);

const fs = require('fs');

const originalNote = {
    tittle: 'Some tittle',
    body: 'Some body'
}

const originalNoteString = JSON.stringify(originalNote);
//passing file name without mentioning dir by default it considers local dir and creates the file
fs.writeFileSync('notes.json', originalNoteString); 

//passing file name without mentioning dir by default it look in local dir to find the file
const noteString = fs.readFileSync('notes.json');
const note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.tittle);

console.log("starting app.js");

const fs = require('fs');
const lodash = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];
console.log("Command: ", command);
console.log("yargv.argv ", argv);

if(command == 'add'){
    const note = notes.addNote(argv.tittle, argv.body);
    if (note != undefined){
        console.log('Note Created');
        notes.logNotes(note);
    }else{
        console.log(`Duplicate Note "${argv.tittle}" already exists`);
    }
}else if(command == 'list'){
    notes.getAll();
}else if(command == 'read'){
    const note = notes.getNote(argv.tittle);
    if (note !== undefined){
        console.log('Note result');
        notes.logNotes(note);
    }else{
        console.log('Note not found');
    }
    
}else if(command == 'remove'){
    const noteRemoved = notes.remove(argv.tittle);
    const message = noteRemoved ? 'Note Removed' : 'Note doesnot exist';
    console.log(message);
    
}else{
    console.log('Command not recognized');
}

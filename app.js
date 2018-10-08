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
        console.log('--');
        console.log(`Tittle: ${note.tittle}`);
        console.log(`Body: ${note.body}`);
    }else{
        console.log(`Duplicate Note "${argv.tittle}" already exists`);
    }
}else if(command == 'list'){
    notes.getAll();
}else if(command == 'read'){
    notes.getNote(argv.tittle);
}else if(command == 'remove'){
    notes.remove(argv.tittle);
}else{
    console.log('Command not recognized');
}

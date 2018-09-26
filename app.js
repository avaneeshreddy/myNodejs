console.log("starting app.js");

const fs = require('fs');
const lodash = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = process.argv[2];
console.log("Command: ", command);
console.log("process.argv ", process.argv);
console.log("yargv.argv ", argv);

if(command == 'add'){
    notes.addNote(argv.tittle, argv.body);
}else if(command == 'list'){
    console.log('Listing all notes');
}else if(command == 'read'){
    console.log('Reading note');
}else if(command == 'remove'){
    console.log('Removnig note');
}else{
    console.log('Command not recognized');
}

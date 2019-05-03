//console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes.js');

yargs.version('1.0.1')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true

        }  
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)

    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function (argv) {
        notes.removeNote(argv.title)

    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        notes.listNotes()
        //console.log('Listing notes!')

    }
})


yargs.command({
    command: 'read',
    describe: 'Read the contents of a note',
    handler: function (argv) {
        notes.readNote(argv.title)
    }
})

// the efficient way to grab arguments and format then nicely for easy access
//console.log(yargs.argv); 
yargs.parse()
//console.log(process.argv)




// if (command === "add"){
//     notes.addNote(argv.title,argv.body);
// } 
// else if (command === "list"){
//     notes.getAll();
// } 
// else if (command === 'read'){
//     notes.getNote(argv.title);
// } 
// else if (command === 'remove'){
//     notes.removeNote(argv.title);
// } 
// else {
//     console.log("Command not recognized");
// }


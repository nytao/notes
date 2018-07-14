console.log('main.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

//console.log(yargs.parse());
let argv = yargs.argv;
console.log(`title: ${argv.title}, body: ${argv.body}`);

//console.log(process.argv);
let command = process.argv[2];

console.log(`Command: ${command}`);

if (command === 'add') {
//  console.log('Adding new note');
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
//  console.log('Listing all notes');
  notes.getAll();
} else if (command === 'read') {
//  console.log('Reading note');
  notes.findNote(argv.title);
} else if (command === 'remove') {
//  console.log('Removing note');
  notes.removeNote(argv.title);
} else {
  console.log('Command not found.');
}


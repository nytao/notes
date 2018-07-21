// console.log('main.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

//console.log(yargs.parse());
let argv = yargs
  .command('add', 'add a new note', {
    title: {
      describe: 'title of the note',
      demand: true,
      alias: 't'
    },
    body: {
      describe: 'body of the new note',
      demand: true,
      alias: 'b'
    }
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: {
      describe: 'title of the note',
      demand: true,
      alias: 't'
    }
  })
  .command('remove', 'Remove a note', {
    title: {
      describe: 'title of the note',
      demand: true,
      alias: 't'
    }
  })
  .help()
  .argv;
// console.log(argv);
// console.log(`title: ${argv.title}, body: ${argv.body}`);

//console.log(process.argv);
let command = process.argv[2]; // argv._[0]

// console.log(`Command: ${command}`);

if (command === 'add') {
//  console.log('Adding new note');
  // console.log(argv);
  let note = notes.addNotes(argv.title, argv.body);
  // console.log(note);
  if (note) {
    console.log('Note added successfully!');
    notes.logNote(note);
    // console.log('---');
    // console.log(`Note title: ${note.title}`);
    // console.log(`Note body: ${note.body}`);
    // notes.logNote(note);
  } else {
    console.log(`Note with title ${argv.title} already exists.`);
  }
} else if (command === 'list') {
//  console.log('Listing all notes');
  // console.log(notes.getAll());
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} notes: `);
  allNotes.forEach(n => notes.logNote(n));
} else if (command === 'read') {
//  console.log('Reading note');
  var note = notes.getNote(argv.title);
  // if (note) {
  //   console.log(`Note with title ${note.title} is found with body ${note.body}`);
  // } else {
  //   console.log(`Note with title ${argv.title} not found.`);
  // }
  notes.logNote(note);
} else if (command === 'remove') {
//  console.log('Removing note');
  var status = notes.removeNote(argv.title);
  var message = status ? 'Note removed.' : 'Note not found.'
  console.log(message);
} else {
  console.log('Command not found.');
}


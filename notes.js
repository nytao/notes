// console.log('notes.js');

const fs = require('fs');

const fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch(e) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFile('notes-data.json', JSON.stringify(notes), () => {});
};

const addNotes = (title, body) => {
//  console.log('Adding note: ', title, body);
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicates = notes.filter(note => note.title === title);

  if(duplicates.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  } else {
    // console.log('There exist duplicates.');
  }
};

const getAll = () => {
  // console.log('Getting all notes.');
  return fetchNotes();
};

const getNote = (title) => {
  // console.log('Finding the note ' + title);
  var notes = fetchNotes();
  var n = notes.filter(note => note.title === title);
  return n.length === 1 ? n[0] : undefined;
};

const removeNote = (title) => {
  // console.log('Removing the note ' + title);
  var notes = fetchNotes();
  var n = notes.filter(note => note.title !== title);
  saveNotes(n);
  return notes.length !== n.length;
};

const logNote = note => {
  // debugger;
  if (!note) {
    return;
  }
  console.log('-------');
  console.log(`title: ${note.title}`);
  console.log(`body: ${note.body}`);
};

module.exports = {
  addNotes,
  getAll,
  getNote,
  removeNote,
  logNote
};


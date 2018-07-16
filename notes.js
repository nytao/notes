console.log('notes.js');

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

let addNote = (title, body) => {
//  console.log('Adding note: ', title, body);
  var notes = [];
  var note = {
    title,
    body
  };
  notes = fetchNotes();
  var duplicates = notes.filter(note => note.title === title);

  if(duplicates.length === 0) {
    notes.push(note);
    saveNotes(notes);
  } else {
    console.log('There exist duplicates.');
  }
};

let getAll = () => {
  console.log('Getting all notes.');
};

let findNote = (title) => {
  console.log('Finding the note ' + title);
};

let removeNote = (title) => {
  console.log('Removing the note ' + title);
};

module.exports = {
  addNote,
  getAll,
  findNote,
  removeNote
};


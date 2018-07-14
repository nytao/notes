console.log('notes.js');

const fs = require('fs');

let addNote = (title, body) => {
//  console.log('Adding note: ', title, body);
  var notes = [];
  var note = {
    title,
    body
  };
  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch(err) {

  }
  var duplicates = notes.filter(note => note.title === title);
  console.log(duplicates);
  console.log(duplicates.length);
  if(duplicates.length === 0) {
    notes.push(note);
    console.log(notes);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  } else {console.log('There exist duplicates.');}
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


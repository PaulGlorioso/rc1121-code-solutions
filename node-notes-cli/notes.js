const fs = require('fs');
const read = require('./read');
const add = require('./add');
const del = require('./delete');
const update = require('./update');
const notes = require('./data.json');

const key = process.argv[2];
const note = process.argv[3];
const noteId = process.argv[3];
const noteUp = process.argv[4];

if (key === 'read') {
  read(notes.notes);
} else if (key === 'add') {
  const newNote = JSON.stringify(add(notes, note), null, 2);
  fs.writeFile('data.json', newNote + '\n', 'utf8', err => {
    if (err) throw err;
  });
} else if (key === 'delete') {
  const newNotes = JSON.stringify(del(notes, noteId), null, 2);
  fs.writeFile('data.json', newNotes + '\n', 'utf8', err => {
    if (err) throw err;
  });
} else if (key === 'update') {
  const newNotes = JSON.stringify(update(notes, noteId, noteUp), null, 2);
  fs.writeFile('data.json', newNotes + '\n', 'utf8', err => {
    if (err) throw err;
  });
}

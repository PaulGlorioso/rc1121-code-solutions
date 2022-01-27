const fs = require('fs');
const express = require('express');
const app = express();
const add = require('./add');
const del = require('./delete');
const update = require('./update');
const notes = require('./data.json');
let nextId = 10;

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notesObject = [];
  for (const prop in notes) {
    notesObject.push(notes[prop]);
  }
  res.json(notesObject);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!id || id <= 0) {
    return res.status(400).send({ error: 'ID must be a positive integer' });
  }
  if (!notes.notes[id]) {
    return res.status(404).send({ error: `Cannot find note with ID ${id}` });
  }

  res.json(notes.notes[id]);

});

app.post('/api/notes', (req, res) => {
  const data = req.body;
  if (!data.content) {
    return res.status(400).send({ error: 'Content is a required field' });
  }
  data.id = nextId;
  nextId++;
  const newNote = JSON.stringify(add(notes, data), null, 2);
  fs.writeFile('data.json', newNote + '\n', 'utf8', err => {
    if (err) {
      console.error(err);
      return res.status(500).send({ error: 'An unexpected error has occured.' });
    } else {
      res.status(201).json(data);
    }
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const noteId = Number(req.params.id);
  if (!noteId || noteId <= 0) {
    return res.status(400).send({ error: 'Id should be a postive integer' });
  }
  if (!notes.notes[noteId]) {
    return res.status(404).send({ error: 'Cannot find note with Id ' + noteId });
  }
  const newNotes = JSON.stringify(del(notes, noteId), null, 2);
  fs.writeFile('data.json', newNotes + '\n', 'utf8', err => {
    if (err) {
      console.error(err);
      return res.status(500).send({ error: 'An unexpected error has occured.' });
    } else {
      res.sendStatus(204);
    }
  });
});

app.put('/api/notes/:id', (req, res) => {
  const noteId = Number(req.params.id);
  if (!noteId || noteId <= 0) {
    return res.status(400).send({ error: 'Id should be a postive integer' });
  }
  if (!notes.notes[noteId]) {
    return res.status(404).send({ error: 'Cannot find note with Id ' + noteId });
  }
  const data = req.body;
  if (!data.content) {
    return res.status(400).send({ error: 'Content is a required field' });
  }
  const newNotes = JSON.stringify(update(notes, noteId, data), null, 2);
  fs.writeFile('data.json', newNotes + '\n', 'utf8', err => {
    if (err) {
      console.error(err);
      return res.status(500).send({ error: 'An unexpected error has occured.' });
    } else {
      res.status(201).json(data);
    }
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

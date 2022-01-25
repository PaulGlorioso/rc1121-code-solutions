const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gArray = [];
  for (const id in grades) {
    gArray.push(grades[id]);
  }
  res.json(gArray);
});

app.post('/api/grades', (req, res) => {
  const data = req.body;
  data.id = nextId;
  res.status(201).send(grades[data.id] = data);
  nextId++;
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

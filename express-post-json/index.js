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
  grades[data.id] = data;
  nextId++;
  res.status(201).json(data);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

const express = require('express');
const app = express();
const path = require('path');

const dirc = path.join(__dirname, 'public');
console.log(dirc);
console.log(__dirname);
app.use(express.static(dirc));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

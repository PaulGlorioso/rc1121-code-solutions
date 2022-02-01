const express = require('express');
const pg = require('pg');
const app = express();
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
  select *
    from "grades";
    `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      if (!grade) {
        return res.status(500).json({ error: 'An unexpected error has occurred.' });
      } else {
        return res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'GradeId must be a positive integer' });
    return;
  }
  const sql = `
  select "gradeId",
         "name",
         "course",
         "score",
         "createdAt"
    from "grades"
   where "gradeId" = $1
   `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        return res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
      } else {
        return res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const data = req.body;
  data.score = Number(data.score);
  if (!data.name || !data.course || !data.score) {
    console.error();
    return res.status(400).send({ error: 'Missing content' });
  }
  const values = [data.course, data.name, data.score];
  const sql = `
  insert into "grades" ("course", "name", "score")
  values ($1, $2, $3)
  returning *
  `;
  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occurred.' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!gradeId || gradeId <= 0) {
    return res.status(400).send({ error: 'GradeId should be a positive integer' });
  }
  const sql = `
  delete from "grades"
        where "gradeId" = $1
        `;
  const value = [gradeId];
  db.query(sql, value)
    .then(result => {
      const grade = result.rowCount;
      if (grade <= 0) {
        return res.status(404).send({ error: 'Grade not found' });
      } else {
        return res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ error: 'An unexpected error has occurred.' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId);
  const data = req.body;
  if (!gradeId || gradeId <= 0) {
    return res.status(400).send({ error: 'GradeId should be a positive integer ' });
  }
  const sql = `
  update "grades"
  set "name" = $2,
  "course" = $1,
      "score" = $3
  where "gradeId" = $4
  returning *
  `;
  const values = [data.course, data.name, data.score, gradeId];
  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        return res.status(404).send({ error: 'Grade not found' });
      }
      return res.status(200).send(grade);
    })
    .catch(err => {
      console.error(err);
      return res.status(500).send({ error: 'An error has occurred.' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});

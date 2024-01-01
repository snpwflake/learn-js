/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import fs from 'fs';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.routes.js';
import postRouter from './routes/post.routes.js';

import db from './database.js';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

const html = fs.readFileSync('public/main.html', 'utf8');
// const main = fs.readFileSync('public/index.html', 'utf8');

app.get('/', async (req, res) => {
  const cookie = req.cookies.token;
  const queryId = `
    SELECT person.id
    FROM person
    INNER JOIN session
    ON session.email = person.email
    WHERE session.token = $1
  `;
  const id = await db.query(queryId, [cookie]);
  if (!id.rows.length) {
    res.type('html').send(html);
  } else {
    res.type('html').send('<script>window.location.replace(\'/feed\');alert(\'Вы уже авторизованы!\')</script>');
  }
});

app.get('/feed', async (req, res) => {
  const cookie = req.cookies.token;
  const queryId = `
    SELECT person.id
    FROM person
    INNER JOIN session
    ON session.email = person.email
    WHERE session.token = $1
  `;
  const id = await db.query(queryId, [cookie]);
  if (!id.rows.length) {
    res.redirect('/');
  }
});

// app.get('/api/profile', async (req, res) => {
//   const cookie = req.cookies.token;
//   const queryProfile = `
//     SELECT person.*
//     FROM person
//     INNER JOIN session
//     ON session.email = person.email
//     WHERE session.token = $1
//   `;
//   const posts = await db.query(queryProfile, [cookie]);
//   res.json(posts.rows);
// });

// app.put('/api/profile', async (req, res) => {
//   const cookie = req.cookies.token;
//   const queryProfile = `
//     SELECT person.*
//     FROM person
//     INNER JOIN session
//     ON session.email = person.email
//     WHERE session.token = $1
//   `;
//   const posts = await db.query(queryProfile, [cookie]);
//   res.json(posts.rows);
// });
app.use('/api', userRouter);
app.use('/api', postRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

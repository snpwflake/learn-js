/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import fs from 'fs';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.routes.js';

import db from './database.js';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

const html = fs.readFileSync('public/main.html', 'utf8');
app.get('/', (req, res) => res.type('html').send(html));

app.post('/api/post', async (req, res) => {
  const cookie = req.cookies.token;
  const { text } = req.body;
  const queryId = `
    SELECT person.user_id
    FROM person
    INNER JOIN session
    ON session.email = person.email
    WHERE session.token = $1
  `;
  const querySendPost = `
    INSERT INTO post
    (text, date, user_id, likes, shares, saves)
    VALUES ($1, $2, $3, $4, $5, $6)
  `;
  const id = await db.query(queryId, [cookie]);
  await db.query(querySendPost, [text, Date(), id.rows[0].user_id, 0, 0, 0]);
  res.json('OK!');
});

app.get('/api/post', async (req, res) => {
  const queryPosts = `
    SELECT post.*, person.nickname, person.username 
    FROM post
    INNER JOIN person
    ON person.id = post.user_id
  `;
  const posts = await db.query(queryPosts);
  res.json(posts.rows);
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import fs from 'fs';

import cookieParser from 'cookie-parser';
import postRouter from './public/routes/post.routes.js';
import userRouter from './public/routes/users.routes.js';
import loginRouter from './public/routes/login.routes.js';
import db from './public/db.js';
// import sessionRouter from './public/routes/sessions.routes.js';

const app = express();
const port = 8080;
const html = fs.readFileSync('public/main.html', 'utf8');
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

app.get('/app', async (req, res) => {
  const { email, token } = req.cookies;
  const result = await db.query('SELECT * FROM sessions WHERE email = $1 AND token = $2', [email, token]);
  if (result.rows.length > 0) {
    res.type('html').send('<script>window.location.replace(\'/app\');alert(\'Вы уже авторизованы!\')</script>');
  } else {
    res.type('html').send(html);
  }
});

const index = fs.readFileSync('public/index.html', 'utf8');

app.get('/app', async (req, res) => {
  const { email, token } = req.cookies;
  const result = await db.query('SELECT * FROM sessions WHERE email = $1 AND token = $2', [email, token]);
  if (result.rows.length > 0) {
    res.type('html').send(index);
  } else {
    res.type('html').send('<script>window.location.replace(\'/\');alert(\'Вы не авторизованы!\')</script>');
  }
});

app.use('/api', userRouter);

app.use('/api', postRouter);

app.use('/api', loginRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

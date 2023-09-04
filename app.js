import express from 'express';
import fs from 'fs';

import pkg from 'pg';

const { Client } = pkg;

const client = new Client({
  user: 'twitbtn_production_user',
  host: 'dpg-cjaaiei683bs73asugs0-a.oregon-postgres.render.com',
  database: 'twitbtn_production',
  password: 'MtjFkxNmIfzPdQTSeojzKGanhNfQhXvB',
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

await client.connect();

const app = express();
const port = 3000;

const html = fs.readFileSync('public/main.html', 'utf8');

app.get('/', (req, res) => res.type('html').send(html));

app.get('/posts.json', async (req, res) => {
  const db = await client.query('SELECT * FROM post');
  res.send(`${JSON.stringify(db.rows)}`);
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

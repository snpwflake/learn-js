import express from 'express';
import fs from 'fs';

const app = express();
const port = 3000;

const html = fs.readFileSync('public/main.html', 'utf8');

app.get('/', (req, res) => res.type('html').send(html));

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


import pg from 'pg';

const client = new pg.Client({
  user: 'twitbtn_production_user',
  host: 'dpg-cjaaiei683bs73asugs0-a',
  database: 'twitbtn_production',
  password: 'MtjFkxNmIfzPdQTSeojzKGanhNfQhXvB',
  port: 5432,
});

client.connect();

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

const db = await client.query('SELECT * FROM post');
console.log(db.rows.toString());

await client.end();

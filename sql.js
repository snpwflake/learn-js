import { Pool, Client } from 'pg';

const pool = new Pool({
  user: 'twitbtn_production_user',
  host: 'postgres://twitbtn_production_user:MtjFkxNmIfzPdQTSeojzKGanhNfQhXvB@dpg-cjaaiei683bs73asugs0-a/twitbtn_production',
  database: 'twitbtn_production',
  password: 'MtjFkxNmIfzPdQTSeojzKGanhNfQhXvB',
  port: 3211,
});

console.log(await pool.query('SELECT NOW()'));

const client = new Client({
  user: 'twitbtn_production_user',
  postgres: '//twitbtn_production_user:MtjFkxNmIfzPdQTSeojzKGanhNfQhXvB@dpg-cjaaiei683bs73asugs0-a.oregon-postgres.render.com/twitbtn_production',
  database: 'twitbtn_production',
  password: 'MtjFkxNmIfzPdQTSeojzKGanhNfQhXvB',
  port: 3211,
});

await client.connect();

console.log(await client.query('SELECT NOW()'));

await client.end();

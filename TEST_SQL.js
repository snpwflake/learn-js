/* eslint-disable import/no-extraneous-dependencies */
import pkg from 'pg';

const { Client } = pkg;

const connectionString = 'postgres://twitbtn_production_user:MtjFkxNmIfzPdQTSeojzKGanhNfQhXvB@dpg-cjaaiei683bs73asugs0-a.oregon-postgres.render.com/twitbtn_production';

const client = new Client({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

await client.connect();
console.log(await client.query('SELECT * FROM post'));
await client.end();

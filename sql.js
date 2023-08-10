import pg from 'pg';

const client = new pg.Client({
  user: 'twitbtn_production_user',
  host: 'dpg-cjaaiei683bs73asugs0-a',
  database: 'twitbtn_production',
  password: 'MtjFkxNmIfzPdQTSeojzKGanhNfQhXvB',
  port: 5432,
});

client.connect();

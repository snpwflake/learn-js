import pkg from 'pg';

const { Pool } = pkg;

const db = new Pool({
  user: 'timur_user',
  password: 'oQ9OAJsB5ibNr9njCCsnNF9CXNI3vnsY',
  host: 'dpg-ckfaq70l3its73bluneg-a.oregon-postgres.render.com',
  port: 5432,
  database: 'timur',
  ssl: {
    rejectUnauthorized: false,
  },
});

export default db;

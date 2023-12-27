import pkg from 'pg';

const { Pool } = pkg;

const db = new Pool({
  user: 'psql',
  password: '1ItvnKc4zEKXaTgtAjY6LVCtYTlIZm6N',
  host: 'dpg-clo9ojkjtl8s73amg7og-a.frankfurt-postgres.render.com',
  port: 5432,
  database: 'psql_86ye',
  ssl: {
    rejectUnauthorized: false,
  },
});

export default db;

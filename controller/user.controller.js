/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-extraneous-dependencies */
import * as bcrypt from 'bcrypt';
import db from '../database.js';

class userController {
  async createUser(req, res) {
    const { nickname, email, pass } = req.body;
    const user = await db.query('SELECT email FROM person WHERE email = $1', [email]);
    if (user.rows.length) {
      res.json({ exist: false, status: 'ERROR' });
      return;
    }
    const userNicknames = await db.query('SELECT nickname FROM person WHERE nickname = $1', [nickname]);
    if (userNicknames.rows.length) {
      res.json({ exist: true, status: 'ERROR' });
      return;
    }
    const hash = bcrypt.hashSync(pass, 10);
    await db.query('INSERT INTO person (nickname, email, hash) VALUES ($1, $2, $3) RETURNING *', [nickname, email, hash]);
    res.json({ exist: true, status: 'OK' });
  }

  async updateUser(req, res) {
    const cookie = req.cookies;
    const queryId = `
      SELECT person.id
      FROM person
      INNER JOIN session
      ON session.email = person.email
      WHERE session.token = $1 AND session.email = $2`;
    const id = await db.query(queryId, [cookie.token, cookie.email]);
    const {
      nickname, username, text, location, date, dateView,
    } = req.body;
    const update = `
      UPDATE person
      SET (nickname, username, text, location, date, date_view) = ($1, $2, $3, $4, $5, $6)
      WHERE id = $7 RETURNING *`;
    const user = await db.query(update, [nickname, username, text, location, date, dateView, id]);
    res.json(user.rows[0]);
  }

  async login(req, res) {
    const { email, pass } = req.body;
    const userHash = await db.query('SELECT hash FROM person WHERE email = $1', [email]);
    if (!userHash.rows.length) {
      res.json({ exist: false, status: 'ERROR' });
      return;
    }
    const { hash } = userHash.rows[0];
    if (!bcrypt.compareSync(pass, hash)) {
      res.json({ exist: true, status: 'ERROR' });
      return;
    }
    const token = crypto.randomUUID();
    await db.query('INSERT INTO session (email, token) VALUES ($1, $2) RETURNING *', [email, token]);
    res.cookie('email', email, { maxAge: 900000, httpOnly: true });
    res.cookie('token', token, { maxAge: 900000, httpOnly: true });
    res.json({ exist: true, status: 'OK' });
  }

  // async getUser()
}

export default new userController();

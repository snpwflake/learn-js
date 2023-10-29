/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-extraneous-dependencies */
import * as bcrypt from 'bcrypt';
import db from '../db.js';

const randomId = Date.now() % (100_000_000);
class userController {
  async createUser(req, res) {
    const { email, username, pass } = req.body;
    const user = await db.query('SELECT * FROM users where email = $1', [email]);
    const hash = bcrypt.hashSync(pass, 10);
    if (user.rows.length === 0) {
      res.json('OK');
      const userAdd = await db.query('INSERT INTO users (id, email, username, password) values ($1, $2, $3, $4) RETURNING *', [randomId, email, username, hash]);
    } else {
      res.json('ERROR');
    }
  }
}

export default new userController();

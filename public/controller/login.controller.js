/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
/* eslint-disable class-methods-use-this */
import * as bcrypt from 'bcrypt';
import db from '../db.js';
/* eslint-disable import/no-extraneous-dependencies */

class loginController {
  async login(req, res) {
    const { email, pass } = req.body;
    const user = await db.query('SELECT password, id FROM users where email = $1', [email]);
    if (user.rows.length === 0) {
      res.json(400);
      return;
    }
    const hash = user.rows[0].password;
    if (!bcrypt.compareSync(pass, hash)) {
      res.json(401);
      return;
    }
    const { id } = user.rows[0];
    const date = new Date();
    const token = crypto.randomUUID();
    const cookies = await db.query('UPDATE sessions SET token = $1, date = $2 WHERE id = $3', [token, date, id]);
    res.json({ token, email });
  }
}

export default new loginController();

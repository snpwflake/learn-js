/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
/* eslint-disable class-methods-use-this */
import * as bcrypt from 'bcrypt';
import db from '../db.js';
/* eslint-disable import/no-extraneous-dependencies */

class loginController {
  async login(req, res) {
    const { email, pass } = req.body;
    console.log(email, pass);
    const user = await db.query('SELECT password FROM users where email = $1', [email]);
    if (user.rows.length === 0) {
      res.json(400);
      return;
    }
    const hash = user.rows[0].password;
    if (!bcrypt.compareSync(pass, hash)) {
      res.json(401);
      return;
    }
    res.json('ok');
  }
}

export default new loginController();

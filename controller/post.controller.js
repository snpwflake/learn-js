/* eslint-disable new-cap */
/* eslint-disable class-methods-use-this */
import db from '../database.js';

class postController {
  async createPost(req, res) {
    const cookie = req.cookies.token;
    const { text } = req.body;
    const queryId = `
      SELECT person.id
      FROM person
      INNER JOIN session
      ON session.email = person.email
      WHERE session.token = $1
    `;
    const querySendPost = `
      INSERT INTO post
      (text, date, user_id, likes, shares, saves)
      VALUES ($1, $2, $3, $4, $5, $6)
    `;
    const id = await db.query(queryId, [cookie]);
    await db.query(querySendPost, [text, Date(), id.rows[0].user_id, 0, 0, 0]);
    res.json('OK!');
  }

  async getPosts(req, res) {
    const queryPosts = `
      SELECT post.*, person.nickname, person.username 
      FROM post
      INNER JOIN person
      ON person.id = post.user_id
    `;
    const posts = await db.query(queryPosts);
    res.json(posts.rows);
  }
}

export default new postController();

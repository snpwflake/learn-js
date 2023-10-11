/* eslint-disable class-methods-use-this */
import db from '../db.js';

class PostController {
  async createPost(req, res) {
    const {
      id, content, timecreate, userid,
    } = req.body;
    const newPost = await db.query(
      'INSERT INTO post (id, content, user_id, timecreate, likes, reposts, saves) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [id, content, userid, timecreate, 0, 0, 0],
    );
    res.json(newPost.rows[0]);
  }

  async getPosts(req, res) {
    const posts = await db.query(
      'SELECT * FROM post',
    );
    res.json(posts.rows);
  }

  async getOnePost(req, res) {
    const { id } = req.params;
    const posts = await db.query(
      'SELECT * FROM post where id = $1',
      [id],
    );
    res.json(posts.rows[0]);
  }

  async updatePost(req, res) {
    const { id, content } = req.body;
    const post = await db.query(
      'UPDATE post set content = $1 where id = $2 RETURNING *',
      [content, id],
    );
    res.json(post.rows[0]);
  }

  async deletePost(req, res) {
    const { id } = req.params;
    const post = await db.query(
      'DELETE FROM post where id = $1',
      [id],
    );
    res.json(post.rows[0]);
  }
}

export default new PostController();

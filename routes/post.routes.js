import { Router } from 'express';

import postController from '../controller/post.controller.js';

const router = new Router();

router.post('/post', postController.createPost);
router.get('/posts', postController.getPosts);
// router.get('/posts/:id', postController.getOnePost);
// router.put('/posts', postController.updatePost);
// router.delete('/posts/:id', postController.deletePost);

export default router;

import { Router } from 'express';

import usersController from '../controller/users.controller.js';

const router = new Router();

// router.post('/createuser', usersController.createUser);
router.post('/createuser', usersController.createUser);
// router.get('/createuser/:id', postController.getOnePost);
// router.put('/createuser', postController.updatePost);
// router.delete('/createuser/:id', postController.deleteUser);

export default router;

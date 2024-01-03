import { Router } from 'express';

import userController from '../controller/user.controller.js';

const router = new Router();

router.post('/reg', userController.createUser);
router.post('/login', userController.login);
router.put('/setting', userController.updateUser);
// router.get('/profile', postController.getOnePost);

export default router;

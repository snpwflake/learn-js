import { Router } from 'express';

import loginController from '../controller/login.controller.js';

const router = new Router();

router.post('/login', loginController.login);

export default router;

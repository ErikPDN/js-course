import { Router } from 'express';

import photoController from '../controllers/PhotoController';
import authMiddleware from '../middlewares/loginRequired';

const router = new Router();

router.post('/', authMiddleware, photoController.create);

export default router;

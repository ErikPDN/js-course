import { Router } from 'express';
import userController from '../controllers/UserController';
import authMiddleware from '../middlewares/loginRequired';

const router = new Router();

router.get('/', authMiddleware, userController.index);
router.get('/:id', authMiddleware, userController.show);

router.post('/', authMiddleware, userController.create);
router.delete('/', authMiddleware, userController.delete);
router.put('/', authMiddleware, userController.update);

export default router;

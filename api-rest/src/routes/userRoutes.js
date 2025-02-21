import { Router } from 'express';
import userController from '../controllers/UserController';
import authMiddleware from '../middlewares/loginRequired';

const router = new Router();

router.post('/', authMiddleware, userController.create);
router.get('/', authMiddleware, userController.index);
router.get('/:id', authMiddleware, userController.show);
router.delete('/:id', authMiddleware, userController.delete);
router.put('/:id', authMiddleware, userController.update);

export default router;

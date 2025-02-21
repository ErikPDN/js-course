import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.create);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.delete('/:id', userController.delete);
router.put('/:id', userController.update);

export default router;

import { Router } from 'express';
import studentController from '../controllers/StudentController';
import authMiddleware from '../middlewares/loginRequired';

const router = new Router();

router.get('/', studentController.index);
router.get('/:id', studentController.show);

router.post('/', authMiddleware, studentController.create);
router.delete('/:id', authMiddleware, studentController.delete);
router.put('/:id', authMiddleware, studentController.update);

export default router;

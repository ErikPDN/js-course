import { Router } from 'express';
import studentController from '../controllers/StudentController';

const router = new Router();

router.get('/', studentController.index);
router.post('/', studentController.create);

export default router;

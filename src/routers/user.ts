import { Router } from 'express';
import { register, login, getUser } from '../controllers/user';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/:id', getUser);

export default router;

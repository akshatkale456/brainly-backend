import { Router } from 'express';
import { signup } from '../controllers/signup.js';
import { signin } from '../controllers/signin.js';
const router = Router();
router.post('/signup', signup);
router.post('/signin', signin);
export default router;
//# sourceMappingURL=authRoutes.js.map
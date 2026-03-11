import { Router } from 'express';
import { signup } from '../controllers/signup.js';
import { signin } from '../controllers/signin.js';
const auth = Router();
auth.post('/signup', signup);
auth.post('/signin', signin);
export default auth;
//# sourceMappingURL=authRoutes.js.map
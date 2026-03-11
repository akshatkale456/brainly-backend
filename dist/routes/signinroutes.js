import { Router } from 'express';
import { signup } from '../controlllers/signup.js';
const auth = Router();
auth.post('/signup', signup);
export default auth;
//# sourceMappingURL=signinroutes.js.map
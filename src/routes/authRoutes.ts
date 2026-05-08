import { Router } from 'express';
import { signup } from '../controllers/signup.js';
import { signin } from '../controllers/signin.js';


import { authimiddleware } from '../middlewares/autthmiddleware.js';

const router = Router();

router.post('/signup', signup);
router.post('/signin', signin);

// Profile pic upload route
// 1. authimiddleware authenticates user
// 2. upload.single() parses form-data and stores file
// 3. uploadProfilePic saves filename to db

export default router;
import { Router } from 'express';
import { signup } from '../controllers/signup.js';
import { signin } from '../controllers/signin.js';
import { avatar } from '../controllers/upload.js';


import { authimiddleware } from '../middlewares/autthmiddleware.js';
import { upload } from '../utils/multer.js';

const router = Router();

router.post('/signup', signup);
router.post('/signin', signin);


router.post("/upload",authimiddleware,upload.single("avatar"), avatar)

export default router;
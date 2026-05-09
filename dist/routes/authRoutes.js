import { Router } from 'express';
import { signup } from '../controllers/signup.js';
import { signin } from '../controllers/signin.js';
import { avatar } from '../controllers/upload.js';
import { authimiddleware } from '../middlewares/autthmiddleware.js';
import { upload } from '../utils/multer.js';
const router = Router();
router.post('/signup', signup);
router.post('/signin', signin);
// Profile pic upload route
// 1. authimiddleware authenticates user
// 2. upload.single() parses form-data and stores file
// 3. uploadProfilePic saves filename to db
router.post("/upload", authimiddleware, upload.single("avatar"), avatar);
export default router;
//# sourceMappingURL=authRoutes.js.map
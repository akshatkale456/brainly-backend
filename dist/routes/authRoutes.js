import { Router } from 'express';
import { signup } from '../controllers/signup.js';
import { signin } from '../controllers/signin.js';
import { uploadProfilePic } from '../controllers/uploadavatar.js';
import { getuser } from '../controllers/getuser.js';
import { authimiddleware } from '../middlewares/autthmiddleware.js';
import { upload } from '../middlewares/upload.js';
const router = Router();
router.post('/signup', signup);
router.post('/signin', signin);
// Profile pic upload route
// 1. authimiddleware authenticates user
// 2. upload.single() parses form-data and stores file
// 3. uploadProfilePic saves filename to db
router.post('/upload-profile-pic', authimiddleware, upload.single('profilePic'), uploadProfilePic);
// Get current user details
router.get('/me', authimiddleware, getuser);
export default router;
//# sourceMappingURL=authRoutes.js.map
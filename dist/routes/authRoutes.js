import { Router } from 'express';
import { signup } from '../controllers/signup.js';
import { signin } from '../controllers/signin.js';
import { uploadavatar } from '../controllers/uploadavatar.js';
import { getuser } from '../controllers/getuser.js';
import { authimiddleware } from '../middlewares/autthmiddleware.js';
import { upload } from '../middlewares/upload.js';
import { multererror } from '../controllers/multererror.js';
import { generateOverview } from '../controllers/aioverview.js';
const router = Router();
router.post('/signup', signup);
router.post('/signin', signin);
// Profile pic upload route
// 1. authimiddleware authenticates user
// 2. upload.single() parses form-data and stores file
// 3. uploadProfilePic saves filename to db
router.post('/upload-pic', authimiddleware, multererror, uploadavatar);
// Get current user details
router.get('/me', authimiddleware, getuser);
// Generate AI overview based on frontend cards data
router.post('/ai-overview', authimiddleware, generateOverview);
export default router;
//# sourceMappingURL=authRoutes.js.map
import { Router } from 'express';
import { signup } from '../controllers/signup.js';
import { signin } from '../controllers/signin.js';
import { avatar } from '../controllers/upload.js';
import { todo, deletetodo, updatetodo, gettodo } from '../controllers/todo.js';
import { twitter, deletetwitter, updatetwitter, gettwitter } from '../controllers/twitter.js';
import { youtube, deleteyoutube, updateyoutube, getyoutube } from '../controllers/youtube.js';


import { authimiddleware } from '../middlewares/autthmiddleware.js';
import { upload } from '../utils/multer.js';

const router = Router();

router.post('/signup', signup);
router.post('/signin', signin);


router.post("/upload",authimiddleware,upload.single("avatar"), avatar)

// Todo routes
router.get("/todo/get",authimiddleware,gettodo)
router.post('/todo', authimiddleware, todo);
router.delete('/todo/:todoid', authimiddleware, deletetodo);
router.put('/todo/:todoid', authimiddleware, updatetodo);

// Twitter routes
router.get("/twitter/get", authimiddleware, gettwitter);
router.post('/twitter', authimiddleware, twitter);
router.delete('/twitter/:twitterid', authimiddleware, deletetwitter);
router.put('/twitter/:twitterid', authimiddleware, updatetwitter);

// YouTube routes
router.get("/youtube/get", authimiddleware, getyoutube);
router.post('/youtube', authimiddleware, youtube);
router.delete('/youtube/:youtubeid', authimiddleware, deleteyoutube);
router.put('/youtube/:youtubeid', authimiddleware, updateyoutube);

export default router;
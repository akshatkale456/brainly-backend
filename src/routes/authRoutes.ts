import { Router } from 'express';
import { signup } from '../controllers/signup.js';
import { signin } from '../controllers/signin.js';
import { logout } from '../controllers/logout.js';
import { todo, deletetodo, updatetodo, gettodo } from '../controllers/todo.js';
import { twitter, deletetwitter, updatetwitter, gettwitter } from '../controllers/twitter.js';
import { youtube, deleteyoutube, updateyoutube, getyoutube } from '../controllers/youtube.js';
import { getMe } from '../controllers/me.js';
import { getCardsByRoomId, deleteLivePinCard, editLivePinCard, createLivePinCard } from '../controllers/livepin.js';
import { getMessages, createMessage, deleteMessage, editMessage } from '../controllers/chat.js';
import { createEvent, getEvents, deleteEvent, updateEvent } from '../controllers/event.js';
import { share, generateShareLink } from '../controllers/share.js';
import { authimiddleware } from '../middlewares/autthmiddleware.js';

const router = Router();

router.get('/me', authimiddleware, getMe);
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/logout', logout);

router.get("/todo/get", authimiddleware, gettodo);
router.post('/todo', authimiddleware, todo);
router.delete('/todo/:todoid', authimiddleware, deletetodo);
router.put('/todo/:todoid', authimiddleware, updatetodo);

router.get("/event/get", authimiddleware, getEvents);
router.post('/event', authimiddleware, createEvent);
router.delete('/event/:eventid', authimiddleware, deleteEvent);
router.put('/event/:eventid', authimiddleware, updateEvent);

router.get("/twitter/get", authimiddleware, gettwitter);
router.post('/twitter', authimiddleware, twitter);
router.delete('/twitter/:twitterid', authimiddleware, deletetwitter);
router.put('/twitter/:twitterid', authimiddleware, updatetwitter);

router.get("/youtube/get", authimiddleware, getyoutube);
router.post('/youtube', authimiddleware, youtube);
router.delete('/youtube/:youtubeid', authimiddleware, deleteyoutube);
router.put('/youtube/:youtubeid', authimiddleware, updateyoutube);

router.post("/livepin/cards", authimiddleware, createLivePinCard);
router.get("/livepin/cards/:roomId", authimiddleware, getCardsByRoomId);
router.delete("/livepin/cards/:cardId", authimiddleware, deleteLivePinCard);
router.put("/livepin/cards/:cardId", authimiddleware, editLivePinCard);

router.get("/chat/:roomId", authimiddleware, getMessages);
router.post("/chat", authimiddleware, createMessage);
router.delete("/chat/:messageId", authimiddleware, deleteMessage);
router.put("/chat/:messageId", authimiddleware, editMessage);

router.post("/brain/share", authimiddleware, generateShareLink);
router.get("/brain/:token", share);

export default router;
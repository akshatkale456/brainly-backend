import { Router } from 'express';
import { signup } from '../controllers/signup.js';
import { signin } from '../controllers/signin.js';
import { avatar } from '../controllers/upload.js';
import { todo, deletetodo, updatetodo, gettodo } from '../controllers/todo.js';
import { twitter, deletetwitter, updatetwitter, gettwitter } from '../controllers/twitter.js';
import { youtube, deleteyoutube, updateyoutube, getyoutube } from '../controllers/youtube.js';
// import { arrangeMyDay } from '../controllers/arrangeMyDay.js';
// import { addEvent, getEvents, deleteEvent, updateEvent } from '../controllers/calendar.js';
import { getMe } from '../controllers/me.js';
import { getCardsByRoomId, deleteLivePinCard, editLivePinCard, createLivePinCard } from '../controllers/livepin.js';
import { getMessages, createMessage, deleteMessage, editMessage } from '../controllers/chat.js';
import { createEvent, getEvents, deleteEvent, updateEvent } from '../controllers/event.js';
import { authimiddleware } from '../middlewares/autthmiddleware.js';
import { upload } from '../utils/multer.js';
const router = Router();
// Arrange My Day route
// router.get('/arrange-my-day', authimiddleware, arrangeMyDay);
// Me route
router.get('/me', authimiddleware, getMe);
// Calendar routes
// router.get('/calendar/get', authimiddleware, getEvents);
// router.post('/calendar/event', authimiddleware, addEvent);
// router.delete('/calendar/:eventid', authimiddleware, deleteEvent);
// router.put('/calendar/:eventid', authimiddleware, updateEvent);
router.post('/signup', signup);
router.post('/signin', signin);
router.post("/upload", authimiddleware, upload.single("avatar"), avatar);
// Todo routes
router.get("/todo/get", authimiddleware, gettodo);
router.post('/todo', authimiddleware, todo);
router.delete('/todo/:todoid', authimiddleware, deletetodo);
router.put('/todo/:todoid', authimiddleware, updatetodo);
// Event routes
router.get("/event/get", authimiddleware, getEvents);
router.post('/event', authimiddleware, createEvent);
router.delete('/event/:eventid', authimiddleware, deleteEvent);
router.put('/event/:eventid', authimiddleware, updateEvent);
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
// Livepin routes
router.post("/livepin/cards", authimiddleware, createLivePinCard);
router.get("/livepin/cards/:roomId", authimiddleware, getCardsByRoomId);
router.delete("/livepin/cards/:cardId", authimiddleware, deleteLivePinCard);
router.put("/livepin/cards/:cardId", authimiddleware, editLivePinCard);
// Chat routes
router.get("/chat/:roomId", authimiddleware, getMessages);
router.post("/chat", authimiddleware, createMessage);
router.delete("/chat/:messageId", authimiddleware, deleteMessage);
router.put("/chat/:messageId", authimiddleware, editMessage);
export default router;
//# sourceMappingURL=authRoutes.js.map
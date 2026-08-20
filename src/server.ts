import app from './app.js';
import http from "http";
import cors from 'cors';
import { initializewebsocketserver } from './ws/ws.js';
const server = http.createServer(app);
initializewebsocketserver(server);
app.use(cors({
  origin: 'https://brainly-8la7wdl9y-brainly1.vercel.app/', 
  methods: ['GET', 'POST','DELETE','UPDATE'],
  credentials: true
}));
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
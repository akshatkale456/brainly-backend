import app from './app.js';
import http from "http";
import cors from 'cors';
import { initializewebsocketserver } from './ws/ws.js';
const server = http.createServer(app);
initializewebsocketserver(server);
// Cors is handled in app.ts
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
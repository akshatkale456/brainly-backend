import http from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import url from 'url';
import { wsRouter } from './router.js';
import jwt from 'jsonwebtoken';
export const connectedusers = new Map();
let wss = null;
export const initializewebsocketserver = (server) => {
    if (wss)
        return;
    wss = new WebSocketServer({ noServer: true });
    server.on('upgrade', (request, socket, head) => {
        const { pathname, query } = url.parse(request.url || ' ', true);
        if (pathname === '/ws') {
            const token = query.token;
            if (!token) {
                socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
                socket.destroy();
                return;
            }
            let userid;
            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                userid = decoded.user_id;
            }
            catch (err) {
                socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
                socket.destroy();
                return;
            }
            wss?.handleUpgrade(request, socket, head, (ws) => {
                wss?.emit('connection', ws, request, userid);
            });
        }
        else {
            socket.destroy();
        }
    });
    wss.on("connection", (socket, request, userid) => {
        socket.on("message", async (message) => {
            try {
                const mess = JSON.parse(message.toString());
                await wsRouter(mess, socket, userid);
            }
            catch (err) {
                console.error("Failed to process WS message", err);
            }
        });
        socket.on('close', () => {
            connectedusers.delete(socket);
        });
    });
};
//# sourceMappingURL=ws.js.map
import http from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import url from 'url';
import { wsRouter } from './router.js';
export const connectedusers = new Map();
let wss = null;
export const initializewebsocketserver = (server) => {
    if (wss)
        return;
    wss = new WebSocketServer({ noServer: true });
    server.on('upgrade', (request, socket, head) => {
        const { pathname, query } = url.parse(request.url || ' ', true);
        if (pathname === '/ws') {
            const userid = query.userid;
            if (!userid) {
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
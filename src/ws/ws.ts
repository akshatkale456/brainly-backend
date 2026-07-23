import http from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import url from 'url';
import type { Socket } from 'net';
import { wsRouter } from './router.js';
import type { connection } from '../types/type.js';

export const connectedusers: connection[] = [];
let wss: WebSocketServer | null = null;

export const initializewebsocketserver = (server: http.Server) => {
    if (wss) return;

    wss = new WebSocketServer({ noServer: true });

    server.on('upgrade', (request: http.IncomingMessage, socket: Socket, head: Buffer) => {
        const { pathname, query } = url.parse(request.url || ' ', true);
        if (pathname === '/ws') {
            const userid = query.userid as string;
            if (!userid) {
                socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
                socket.destroy();
                return;
            }
            wss?.handleUpgrade(request, socket, head, (ws) => {
                wss?.emit('connection', ws, request, userid);
            });
        } else {
            socket.destroy();
        }
    });

    wss.on("connection", (socket: WebSocket, request: http.IncomingMessage, userid: string) => {
        socket.on("message", async (message) => {
            try {
                const mess = JSON.parse(message.toString());
                await wsRouter(mess, socket, userid);
            } catch (err) {
                console.error("Failed to process WS message", err);
            }
        });

        socket.on('close', () => {
            const index = connectedusers.findIndex((user) => user.socket === socket);
            if (index !== -1) {
                connectedusers.splice(index, 1);
            }
        });
    });
};
import http from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import url from 'url';
import type { Socket } from 'net';
import { wsRouter } from './router.js';
import type { connection } from '../types/type.js';
import jwt from 'jsonwebtoken';

export const connectedusers: Map<WebSocket, connection> = new Map();
let wss: WebSocketServer | null = null;

export const initializewebsocketserver = (server: http.Server) => {
    if (wss) return;

    wss = new WebSocketServer({ noServer: true });

    server.on('upgrade', (request: http.IncomingMessage, socket: Socket, head: Buffer) => {
        const { pathname, query } = url.parse(request.url || ' ', true);
        if (pathname === '/ws') {
            const token = query.token as string;
            if (!token) {
                socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
                socket.destroy();
                return;
            }

            let userid: string;
            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { user_id: string };
                userid = decoded.user_id;
            } catch (err) {
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
            connectedusers.delete(socket);
        });
    });
};
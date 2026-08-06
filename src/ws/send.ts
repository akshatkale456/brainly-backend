import type { WebSocket } from 'ws';
import { connectedusers } from './ws.js';
import type { WSMessage } from '../types/type.js';

export const handleSend = async (mess: WSMessage, socket: WebSocket, userid: string) => {
    connectedusers.forEach((user) => {
        if (user.roomName === mess.roomName) {
            user.socket.send(JSON.stringify(mess));
        }
    });
};

import type { WebSocket } from 'ws';
import { connectedusers } from './ws.js';
import type { WSMessage } from '../types/type.js';

export const handleChat = async (mess: WSMessage, socket: WebSocket, userid: string) => {
    // Other users in the room receive the message
    connectedusers.forEach((user) => {
        if (user.roomName === mess.roomName && user.socket !== socket) {
            user.socket.send(JSON.stringify(mess));
        }
    });
};

import type { WebSocket } from 'ws';
import { connectedusers } from './ws.js';

export const handleChat = async (mess: any, socket: WebSocket, userid: string) => {
    // Other users in the room receive the message
    connectedusers.forEach((user) => {
        if (user.roomid === mess.roomid && user.socket !== socket) {
            user.socket.send(JSON.stringify(mess));
        }
    });
};

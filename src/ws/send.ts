import type { WebSocket } from 'ws';
import { connectedusers } from './ws.js';

export const handleSend = async (mess: any, socket: WebSocket, userid: string) => {
    connectedusers.forEach((user) => {
        if (user.roomid === mess.roomid) {
            user.socket.send(JSON.stringify(mess));
        }
    });
};

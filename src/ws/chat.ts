import type { WebSocket } from 'ws';
import { connectedusers } from './ws.js';
import type { WSMessage } from '../types/type.js';
export const handleChat = async (mess: WSMessage, socket: WebSocket, userid: string) => {
    const targetRoom = mess.roomName || mess.roomId || mess.roomid;
    connectedusers.forEach((user) => {
        if (user.roomName === targetRoom && user.socket !== socket) {
            if (user.socket.readyState === 1) {
                user.socket.send(JSON.stringify(mess));
            }
        }
    });
};

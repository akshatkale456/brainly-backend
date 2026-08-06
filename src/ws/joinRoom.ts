import type { WebSocket } from 'ws';
import { rooms } from '../models/room.js';
import { connectedusers } from './ws.js';
import type { WSMessage } from '../types/type.js';

export const handleJoinRoom = async (mess: WSMessage, socket: WebSocket, userid: string) => {
    let roomName = mess.roomName;
    connectedusers.set(socket, {
        socket: socket,
        roomName: roomName
    });
    
    await rooms.findOneAndUpdate({ roomName }, {
        $addToSet: {
            activeUser: userid
        }
    });
};

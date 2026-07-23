import type { WebSocket } from 'ws';
import { rooms } from '../models/room.js';
import { connectedusers } from './ws.js';

export const handleJoinRoom = async (mess: any, socket: WebSocket, userid: string) => {
    let roomid = mess.roomId || mess.roomid;
    connectedusers.push({
        socket: socket,
        roomid: roomid
    });
    
    await rooms.findOneAndUpdate({ roomid }, {
        $addToSet: {
            activeUser: userid
        }
    });
};

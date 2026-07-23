import type { WebSocket } from 'ws';
import { rooms } from '../models/room.js';
import { connectedusers } from './ws.js';

export const handleCreateRoom = async (mess: any, socket: WebSocket, userid: string) => {
    connectedusers.push({
        socket: socket,
        roomid: mess.roomid
    });
    
    await rooms.create({
        roomid: mess.roomId || mess.roomid,
        roomName: mess.roomName,
        ownerid: userid,
        activeUser: [userid]
    });
};

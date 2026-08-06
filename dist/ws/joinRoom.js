import { rooms } from '../models/room.js';
import { connectedusers } from './ws.js';
export const handleJoinRoom = async (mess, socket, userid) => {
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
//# sourceMappingURL=joinRoom.js.map
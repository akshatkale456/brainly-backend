import { rooms } from '../models/room.js';
import { connectedusers } from './ws.js';
export const handleCreateRoom = async (mess, socket, userid) => {
    connectedusers.set(socket, {
        socket: socket,
        roomName: mess.roomName
    });
    console.log("you are connected");
    await rooms.create({
        roomid: mess.roomName,
        roomName: mess.roomName,
        ownerid: userid,
        activeUser: [userid]
    });
};
//# sourceMappingURL=createRoom.js.map
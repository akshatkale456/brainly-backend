import { connectedusers } from './ws.js';
export const handleSend = async (mess, socket, userid) => {
    const targetRoom = mess.roomName || mess.roomId || mess.roomid;
    connectedusers.forEach((user) => {
        if (user.roomName === targetRoom) {
            if (user.socket.readyState === 1) {
                user.socket.send(JSON.stringify(mess));
            }
        }
    });
};
//# sourceMappingURL=send.js.map
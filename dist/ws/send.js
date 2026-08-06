import { connectedusers } from './ws.js';
export const handleSend = async (mess, socket, userid) => {
    connectedusers.forEach((user) => {
        if (user.roomName === mess.roomName) {
            user.socket.send(JSON.stringify(mess));
        }
    });
};
//# sourceMappingURL=send.js.map
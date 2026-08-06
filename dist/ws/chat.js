import { connectedusers } from './ws.js';
export const handleChat = async (mess, socket, userid) => {
    // Other users in the room receive the message
    connectedusers.forEach((user) => {
        if (user.roomName === mess.roomName && user.socket !== socket) {
            user.socket.send(JSON.stringify(mess));
        }
    });
};
//# sourceMappingURL=chat.js.map
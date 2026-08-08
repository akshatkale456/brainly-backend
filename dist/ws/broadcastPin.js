import { connectedusers } from './ws.js';
export const handleBroadcastPin = async (mess, socket, userid) => {
    connectedusers.forEach((user) => {
        if (user.roomName === mess.roomName && user.socket !== socket) {
            user.socket.send(JSON.stringify(mess));
        }
    });
};
//# sourceMappingURL=broadcastPin.js.map
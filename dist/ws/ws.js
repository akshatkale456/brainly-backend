import { Socket } from "dgram";
import WebSocket from "ws";
import { WebSocketServer } from "ws";
const user = [];
const ws = new WebSocketServer({ port: 8080 });
ws.on("connection", (Socket) => {
    Socket.on("message", (rawmessage) => {
        const message = rawmessage.toString();
        const mess = JSON.parse(message);
        if (mess.type == "join") {
            user.push({
                socket: Socket,
                roomid: mess.roomid
            });
        }
        if (mess.type == "chat") {
            const currentuser = Socket;
            for (let i = 0; i <= user.length; i++) {
                if (user[i]?.socket !== currentuser && user[i]?.roomid == mess.roomid) {
                    user[i]?.socket.send(mess.payload.message);
                }
            }
        }
    });
});
//# sourceMappingURL=ws.js.map
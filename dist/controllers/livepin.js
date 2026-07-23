import http from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import { rooms } from '../models/room.js';
import { pincards } from '../models/pincard.js';
import url from 'url';
let connectedusers = [];
let wss = null;
export const initializewebsocketserver = (req, res, server) => {
    if (wss) {
        return res.status(200).json({
            "message": " you are already connected "
        });
    }
    // Match the parameter names exactly: request, socket, head
    server.on('upgrade', (request, socket, head) => {
        const { pathname, query } = url.parse(req.url || ' ', true);
        if (pathname === '/ws') {
            const userid = query.userid;
            // Guard clause to guarantee to TypeScript that wss is not null
            if (!userid) {
                socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
                socket.destroy();
                return;
            }
            wss?.handleUpgrade(request, socket, head, (ws) => {
                wss?.emit('connection', ws, request, userid);
            });
        }
        else {
            socket.destroy();
        }
    });
};
wss = new WebSocketServer({ noServer: true });
wss.on("connection", (socket, Request, userid) => {
    socket.on("message", async (message) => {
        const mess = JSON.parse(message.toString());
        if (mess.type == "create") {
            connectedusers.push({
                socket: socket,
                roomid: mess.roomid
            });
            await rooms.create({
                roomid: mess.roomId,
                roomName: mess.roomName,
                ownerid: userid,
                activeUser: [userid]
            });
        }
        if (mess.type == "join") {
            let roomid = mess.roomId;
            connectedusers.push({
                socket: socket,
                roomid: mess.roomid
            });
            await rooms.findOneAndUpdate({ roomid }, {
                $addToSet: {
                    activeUser: userid
                }
            });
        }
        // Added 'send' message type to broadcast data to all users in the room
        // Reason: The user requested to add one more 'send' type to send data to all present users
        if (mess.type == "send") {
            connectedusers.forEach((user) => {
                if (user.roomid === mess.roomid) {
                    user.socket.send(JSON.stringify(mess));
                }
            });
        }
        // Added 'chat' message type for chat room logic
        // Reason: The user requested to add chat room logic where other users receive the message
        if (mess.type == "chat" || mess.type == "send_message") {
            connectedusers.forEach((user) => {
                if (user.roomid === mess.roomid && user.socket !== socket) {
                    user.socket.send(JSON.stringify(mess));
                }
            });
        }
    });
    socket.on('close', async () => {
        connectedusers.filter((user) => user.socket != socket);
    });
});
// Added GET HTTP route controller for live pin to get all cards instead of rooms
// Reason: The user requested that we need all cards get route not rooms
export const getLivePin = async (req, res) => {
    try {
        const allCards = await pincards.find({});
        res.status(200).json({ cards: allCards });
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching cards" });
    }
};
// Added DELETE HTTP route controller for live pin
// Reason: The user requested to create a DELETE route
export const deleteLivePin = async (req, res) => {
    try {
        const { roomid } = req.params;
        await rooms.deleteOne({ roomid });
        res.status(200).json({ message: "Room deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting room" });
    }
};
// Added DELETE HTTP route controller for live pin card
// Reason: The user requested to add delete for the live pin card
export const deleteLivePinCard = async (req, res) => {
    try {
        const { cardId } = req.params;
        await pincards.deleteOne({ cardId });
        res.status(200).json({ message: "Pin card deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting pin card" });
    }
};
//# sourceMappingURL=livepin.js.map
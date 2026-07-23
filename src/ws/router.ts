import type { WebSocket } from 'ws';
import { handleCreateRoom } from './createRoom.js';
import { handleJoinRoom } from './joinRoom.js';
import { handleChat } from './chat.js';
import { handleSend } from './send.js';

export const wsRouter = async (message: any, ws: WebSocket, userid: string) => {
    switch (message.type) {
        case "create":
            await handleCreateRoom(message, ws, userid);
            break;
        case "join":
            await handleJoinRoom(message, ws, userid);
            break;
        case "chat":
        case "send_message":
            await handleChat(message, ws, userid);
            break;
        case "send":
            await handleSend(message, ws, userid);
            break;
        default:
            console.log("Unknown message type:", message.type);
            break;
    }
};

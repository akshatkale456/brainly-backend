import { handleCreateRoom } from './createRoom.js';
import { handleJoinRoom } from './joinRoom.js';
import { handleChat } from './chat.js';
import { handleSend } from './send.js';
import { handleBroadcastPin } from './broadcastPin.js';
import { MessageType } from '../types/type.js';
export const wsRouter = async (message, ws, userid) => {
    switch (message.type) {
        case MessageType.CREATE:
            await handleCreateRoom(message, ws, userid);
            break;
        case MessageType.JOIN:
            await handleJoinRoom(message, ws, userid);
            break;
        case MessageType.CHAT:
        case MessageType.SEND_MESSAGE:
            await handleChat(message, ws, userid);
            break;
        case MessageType.SEND:
            await handleSend(message, ws, userid);
            break;
        case MessageType.BROADCAST_PIN:
            await handleBroadcastPin(message, ws, userid);
            break;
        default:
            console.log("Unknown message type:", message.type);
            break;
    }
};
//# sourceMappingURL=router.js.map
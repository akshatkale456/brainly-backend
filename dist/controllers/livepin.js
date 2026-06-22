import http from 'http';
import { WebSocketServer } from 'ws';
let wss = null;
export const initializewebsocketserver = (req, res, server) => {
    if (wss) {
        return res.status(200).json({
            "message": " you are already connected "
        });
    }
    wss = new WebSocketServer({ noServer: true });
    // Match the parameter names exactly: request, socket, head
    server.on('upgrade', (request, socket, head) => {
        if (request.url === '/ws') {
            // Guard clause to guarantee to TypeScript that wss is not null
            if (!wss) {
                socket.destroy();
                return;
            }
        }
    });
};
//# sourceMappingURL=livepin.js.map
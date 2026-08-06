import http from 'http';
import { WebSocket } from 'ws';
import type { connection } from '../types/type.js';
export declare const connectedusers: Map<WebSocket, connection>;
export declare const initializewebsocketserver: (server: http.Server) => void;
//# sourceMappingURL=ws.d.ts.map
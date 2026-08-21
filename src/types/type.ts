import type { Request } from "express";
import type { WebSocket } from 'ws';

export interface AuthRequest extends Request {
    userid?: string;
}

export interface connection {
    socket: WebSocket,
    roomName: string
}

export enum MessageType {
    CREATE = "create",
    JOIN = "join",
    CHAT = "chat",
    SEND_MESSAGE = "send_message",
    SEND = "send",
    BROADCAST_PIN = "broadcast_pin"
}

export interface WSMessage {
    type: MessageType;
    method?: string;
    payload?: any;
    [key: string]: any;
}
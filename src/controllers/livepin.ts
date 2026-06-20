
import type { Socket } from 'net';
import type {Request , Response} from 'express'
import http from 'http'
import {WebSocketServer} from 'ws'
let wss:WebSocketServer|null = null;
 export const initializewebsocketserver = (req:Request,res:Response ,server:http.Server)=>{
    if(wss){
        return res.status(200).json({
            "message":" you are already connected "
        })
    }
    wss = new WebSocketServer({ noServer: true });

    // Match the parameter names exactly: request, socket, head
    server.on('upgrade', (request: http.IncomingMessage, socket: Socket, head: Buffer) => {
        
        if (request.url === '/ws') {
            // Guard clause to guarantee to TypeScript that wss is not null
            if (!wss) {
                socket.destroy();
                return;
            }
        }

    })

 }

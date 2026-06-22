
import type { Socket } from 'net';
import type {Request , Response} from 'express'
import http from 'http'
import {WebSocketServer,WebSocket} from 'ws'
import type {connection} from "../types/type.js";
let connectedusers:connection[] = []
let wss:WebSocketServer|null = null;
    wss = new WebSocketServer({ noServer: true });
 export const initializewebsocketserver = (req:Request,res:Response ,server:http.Server)=>{
    if(wss){
        return res.status(200).json({
            "message":" you are already connected "
        })
    }


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
 wss = new WebSocketServer({ noServer: true });
 wss.on("connection",(socket:WebSocket)=>{
     socket.on("message",()=>{
     const mess = JSON.parse(message)
      if(mess.type == "join"){
        connectedusers.push({
            socket:socket,
            roomid:mess.roomid

      })}
     } )

 })
 

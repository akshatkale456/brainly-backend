import { Socket } from "dgram";
import WebSocket from "ws";
import { WebSocketServer } from "ws";
interface usertype {
    socket:WebSocket,
    roomid:string 
}
const  user :usertype[] = []
const ws = new WebSocketServer({port:8080})
ws.on("connection",(Socket:WebSocket)=>{
    Socket.on("message",(rawmessage)=>{
     const message = rawmessage.toString()
     const mess = JSON.parse(message)
      if(mess.type == "join"){
        user.push({
            socket:Socket,
            roomid:mess.roomid

      })}
      

      if(mess.type == "chat"){
        const currentuser = Socket
        for(let i = 0 ;i<= user.length ; i++ ){
            if(user[i]?.socket!== currentuser && user[i]?.roomid == mess.roomid ){
                user[i]?.socket.send(mess.payload.message)
                
                
            }
             
        }

      }

    })

})
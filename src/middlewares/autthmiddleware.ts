import type { Request,Response,NextFunction } from "express";
import  Jwt  from "jsonwebtoken";

import "dotenv/config"
import type { AuthRequest } from "../types/type.js";
export const authimiddleware = (req:AuthRequest,res:Response,next:NextFunction)=>{
    try {
        console.log("1. Entered Auth");
        const authHeader = req.headers.authorization;
        
        if(!authHeader){
            return res.status(400).json({
                success:false,
                message:"token does not found "
            });
        }
       
        // Extract token by removing 'Bearer ' if present
        const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;

        // If 'token' is malformed, this line will CRASH the code
        if ( token === undefined){
            return 
        }
        const decodedtoken = Jwt.verify(token, process.env.JWT_SECRET as string) as unknown as { user_id: string };
        
        res.locals.userId = decodedtoken.user_id;
        req.userid = decodedtoken.user_id;
        console.log(decodedtoken);
        console.log("2. Exit");
        next(); // If the code crashed above, it NEVER reaches here
        
    } catch (error) {
        // If Jwt.verify crashes, it jumps down to here instead of breaking the entire app
        console.error("Auth Middleware Error:", error);
        return res.status(401).json({
            success: false,
            message: "Invalid token format" 
        });
    }
}
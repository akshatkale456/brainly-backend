import type { Request,Response,NextFunction } from "express";
import  Jwt  from "jsonwebtoken";

import "dotenv/config"
import type { AuthRequest } from "../types/type.js";
export const authimiddleware = (req:AuthRequest,res:Response,next:NextFunction)=>{
    const token = req.headers.authorization
    if(!token){
        return res.status(400).json({
            success:false,
            message:"token does not found "
        })

    }
   

    const decodedtoken = Jwt.verify(token, process.env.JWT_SECRET as string) as { user_id: string };
    res.locals.userId = decodedtoken.user_id;
    req.userid = decodedtoken.user_id;
    console.log(decodedtoken)
    next()
}
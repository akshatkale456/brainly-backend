import type { NextFunction, Request, Response } from "express";
import dotenv from 'dotenv';
dotenv.config();
import jwt from "jsonwebtoken"

const secret =  process.env.SECRET_KEY
export const usermiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["Authorization"];
    const decode = jwt.verify(header as string, secret )
    if (decode) {
        // @ts-ignore
        req.userid = decode.id
    } 
    next()
}
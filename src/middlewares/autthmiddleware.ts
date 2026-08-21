import type { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";
import "dotenv/config";
import type { AuthRequest } from "../types/type.js";

export const authimiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        console.log("1. Entered Auth");
        
        // Read token from cookies instead of headers
        let token = req.cookies?.token;

        // Fallback to headers for backwards compatibility or tests, optional but good
        if (!token && req.headers.authorization) {
            const authHeader = req.headers.authorization;
            token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;
        }

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "token does not found "
            });
        }

        const decodedtoken = Jwt.verify(token, process.env.JWT_SECRET as string) as unknown as { user_id: string };
        res.locals.userId = decodedtoken.user_id;
        req.userid = decodedtoken.user_id;
        
        console.log(decodedtoken);
        console.log("2. Exit");
        next();
    } catch (error) {
        console.error("Auth Middleware Error:", error);
        return res.status(401).json({
            success: false,
            message: "Invalid token format"
        });
    }
};
import type { Request, Response } from "express";
import { users } from "../models/usermodal.js";
import 'dotenv/config';

export const getuser = async (req: Request, res: Response) => {
    try {
        const userId = res.locals.userId;
        
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized request. User ID missing."
            });
        }

        const user = await users.findById(userId).select('-hashedpassword');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        return res.status(200).json({
            success: true,
            user
        });

    } catch (error) {
        console.error("Error fetching user:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

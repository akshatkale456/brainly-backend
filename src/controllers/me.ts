import { users } from "../models/usermodal.js";
import type { Request, Response } from "express";
interface AuthRequest extends Request {
    userid?: string;
}
export const getMe = async (req: Request, res: Response) => {
    const customreq = req as AuthRequest;
    try {
        const user = await users.findById(customreq.userid);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.json({
            User: {
                url: user.profilePic ? `/uploads/${user.profilePic}` : "",
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

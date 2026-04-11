import type { Request, Response } from "express";
import { users } from "../models/usermodal.js";
import 'dotenv/config';

export const uploadProfilePic = async (req: Request, res: Response) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded. Please upload a profile picture."
            });
        }

        const userId = res.locals.userId;
        
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized request. User ID missing."
            });
        }

        // Store the relative path instead of local absolute path so it can be served
        // Note: Make sure Windows paths are converted or normalized to URL structure
        const filePath = `/uploads/${req.file.filename}`;

        // Update the user's profile picture
        const updatedUser = await users.findByIdAndUpdate(
            userId,
            { profilePic: filePath },
            { new: true } // Returns the updated document
        );

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found to update profile picture."
            });
        }

        return res.status(200).json({
            success: true,
            message: "Profile picture uploaded successfully!",
            profilePic: updatedUser.profilePic
        });

    } catch (error) {
        console.error("Error uploading profile pic:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error during profile picture upload"
        });
    }
};

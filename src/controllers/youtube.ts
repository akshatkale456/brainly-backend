import type { AuthRequest } from "../types/type.js";
import { youtubes } from "../models/youtube.js";
import type { Response } from "express";

export const youtube = async (req: AuthRequest, res: Response) => {
    const userid = req.userid;
    const title = req.body.title;
    const link = req.body.link;
    const priority = req.body.priority || "low";

    try {
        const result = await youtubes.create({
            title,
            link,
            userid,
            priority
        });

        if (!result) {
            return res.status(500).json({
                success: false,
                message: "Failed to save the YouTube video"
            });
        }

        return res.status(200).json({
            success: true,
            message: "YouTube video saved successfully",
            youtube: result
        });
    } catch (e: any) {
        console.error("Error saving youtube:", e);
        return res.status(500).json({
            success: false,
            message: "Internal server error saving YouTube video",
            error: e.message
        });
    }
};
export const getyoutube = async (req: AuthRequest, res: Response) => {
    const userid = req.userid;
    try {
        const response = await youtubes.find({ userid });
        if (!response) {
            return res.status(404).json({
                success: false,
                message: "No YouTube videos found"
            });
        }
        return res.status(200).json({
            success: true,
            data: response
        });
    } catch (e: any) {
        console.error("Error fetching youtube videos:", e);
        return res.status(500).json({
            success: false,
            message: "Internal server error fetching YouTube videos",
            error: e.message
        });
    }
};
export const deleteyoutube = async (req: AuthRequest, res: Response) => {
    const youtubeId = req.params.youtubeid;

    try {
        const result = await youtubes.deleteOne({
            _id: youtubeId
        });

        if (result.deletedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "YouTube video not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "YouTube video deleted successfully"
        });
    } catch (e: any) {
        console.error("Error deleting youtube:", e);
        return res.status(500).json({
            success: false,
            message: "Internal server error deleting YouTube video",
            error: e.message
        });
    }
};

export const updateyoutube = async (req: AuthRequest, res: Response) => {
    const { title, link, priority } = req.body;
    const youtubeId = req.params.youtubeid;

    try {
        const update: any = {};
        if (title !== undefined) update.title = title;
        if (link !== undefined) update.link = link;
        if (priority !== undefined) update.priority = priority;

        const result = await youtubes.updateOne(
            { _id: youtubeId },
            { $set: update }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "YouTube video not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "YouTube video updated successfully"
        });
    } catch (e: any) {
        console.error("Error updating youtube:", e);
        return res.status(500).json({
            success: false,
            message: "Internal server error updating YouTube video",
            error: e.message
        });
    }
};

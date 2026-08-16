import type { AuthRequest } from "../types/type.js";
import { events } from "../models/event.js";
import type { Response } from "express";
export const createEvent = async (req: AuthRequest, res: Response) => {
    const userid = req.userid;
    const { title, description, date, location } = req.body;
    try {
        const result = await events.create({
            title,
            description,
            date,
            location,
            userid
        });
        if (!result) {
            return res.status(500).json({
                message: "Event not saved"
            });
        }
        return res.status(200).json({
            message: "Event saved",
            id: result._id
        });
    } catch (e) {
        console.log(e + " have some error to save the event");
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}
export const getEvents = async (req: AuthRequest, res: Response) => {
    const userid = req.userid;
    try {
        const data = await events.find({ userid });
        if (!data) {
            return res.status(400).json({
                message: "User events not found"
            });
        }
        return res.status(200).json({
            data: data
        });
    } catch (e) {
        console.log(e + " error fetching events");
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}
export const deleteEvent = async (req: AuthRequest, res: Response) => {
    const eventId = req.params.eventid;
    try {
        const result = await events.deleteOne({ _id: eventId });
        if (result.deletedCount === 0) {
            return res.status(404).json({
                message: "Event not found"
            });
        }
        return res.status(200).json({
            message: "Event deleted successfully"
        });
    } catch (e) {
        console.log(e + " have some error to delete the event");
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}
export const updateEvent = async (req: AuthRequest, res: Response) => {
    const { title, description, date, location } = req.body;
    const eventId = req.params.eventid;
    try {
        const update: any = {};
        if (title !== undefined) update.title = title;
        if (description !== undefined) update.description = description;
        if (date !== undefined) update.date = date;
        if (location !== undefined) update.location = location;
        const result = await events.updateOne(
            { _id: eventId },
            { $set: update }
        );
        if (result.matchedCount === 0) {
            return res.status(404).json({
                message: "Event not found"
            });
        }
        return res.status(200).json({
            message: "Event updated successfully"
        });
    } catch (e) {
        console.log(e + " have some error to update the event");
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

import { rooms } from '../models/room.js';
import { pincards } from '../models/pincard.js';
export const deleteLivePin = async (req, res) => {
    try {
        const { roomid } = req.params;
        await rooms.deleteOne({ roomid });
        res.status(200).json({ message: "Room deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting room" });
    }
};
export const deleteLivePinCard = async (req, res) => {
    try {
        const { cardId } = req.params;
        const card = await pincards.findOne({ cardId });
        if (!card) {
            return res.status(404).json({ message: "Pin card not found" });
        }
        const room = await rooms.findOne({ roomid: card.roomId });
        if (!room) {
            return res.status(404).json({ message: "Room not found" });
        }
        if (room.ownerid.toString() === req.userid) {
            await pincards.deleteOne({ cardId });
            return res.status(200).json({ message: "Pin card deleted successfully" });
        }
        else {
            return res.status(403).json({ message: "Unauthorized to delete this pin card" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting pin card" });
    }
};
export const editLivePinCard = async (req, res) => {
    try {
        const { cardId } = req.params;
        const { content, title, link, type, priority, read } = req.body;
        const card = await pincards.findOne({ cardId });
        if (!card) {
            return res.status(404).json({ message: "Pin card not found" });
        }
        const room = await rooms.findOne({ roomid: card.roomId });
        if (!room) {
            return res.status(404).json({ message: "Room not found" });
        }
        if (room.ownerid.toString() === req.userid) {
            await pincards.updateOne({ cardId }, { content, title, link, type, priority, read });
            return res.status(200).json({ message: "Pin card updated successfully" });
        }
        else {
            return res.status(403).json({ message: "Unauthorized to edit this pin card" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Error updating pin card" });
    }
};
export const createLivePinCard = async (req, res) => {
    try {
        const { cardId, roomId, content, title, link, type, priority } = req.body;
        const room = await rooms.findOne({ roomid: roomId });
        if (!room) {
            return res.status(404).json({ message: "Room not found" });
        }
        if (room.ownerid.toString() !== req.userid) {
            return res.status(403).json({ message: "Unauthorized: Only the room admin can create pins" });
        }
        const newCard = await pincards.create({
            cardId,
            roomId,
            content,
            title,
            link,
            type,
            priority,
            createdBy: req.userid
        });
        res.status(201).json({ message: "Pin card created successfully", card: newCard });
    }
    catch (error) {
        res.status(500).json({ message: "Error creating pin card", error });
    }
};
export const getCardsByRoomId = async (req, res) => {
    try {
        const { roomId } = req.params;
        const cards = await pincards.find({ roomId });
        const room = await rooms.findOne({ roomid: roomId });
        const isAdmin = room ? (room.ownerid.toString() === req.userid) : false;
        res.status(200).json({ cards, isAdmin });
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching cards by room id" });
    }
};
//# sourceMappingURL=livepin.js.map
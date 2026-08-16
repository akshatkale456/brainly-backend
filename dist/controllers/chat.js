import { chats } from '../models/chat.js';
import { rooms } from '../models/room.js';
export const getMessages = async (req, res) => {
    try {
        const { roomId } = req.params;
        const room = await rooms.findOne({ roomid: roomId });
        if (!room) {
            return res.status(404).json({ message: "Room not found" });
        }
        // Fetch messages and populate the sender's username
        const messages = await chats.find({ room: room._id }).populate('sender', 'username').sort({ createdAt: 1 });
        res.status(200).json({ messages });
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching messages", error });
    }
};
export const createMessage = async (req, res) => {
    try {
        const { roomId, message, type = 'client' } = req.body;
        const room = await rooms.findOne({ roomid: roomId });
        if (!room) {
            return res.status(404).json({ message: "Room not found" });
        }
        const newMsg = await chats.create({
            room: room._id,
            sender: req.userid,
            message,
            type
        });
        // Populate sender info before returning so UI can display it
        await newMsg.populate('sender', 'username');
        res.status(201).json({ message: "Message created", chat: newMsg });
    }
    catch (error) {
        res.status(500).json({ message: "Error creating message", error });
    }
};
export const deleteMessage = async (req, res) => {
    try {
        const { messageId } = req.params;
        const msg = await chats.findById(messageId);
        if (!msg) {
            return res.status(404).json({ message: "Message not found" });
        }
        const room = await rooms.findById(msg.room);
        // Allow deletion if user is sender OR room admin
        const isSender = msg.sender.toString() === req.userid;
        const isAdmin = room && room.ownerid.toString() === req.userid;
        if (isSender || isAdmin) {
            await chats.findByIdAndDelete(messageId);
            return res.status(200).json({ message: "Message deleted successfully" });
        }
        else {
            return res.status(403).json({ message: "Unauthorized to delete this message" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting message", error });
    }
};
export const editMessage = async (req, res) => {
    try {
        const { messageId } = req.params;
        const { message } = req.body;
        const msg = await chats.findById(messageId);
        if (!msg) {
            return res.status(404).json({ message: "Message not found" });
        }
        // Only sender can edit
        if (msg.sender.toString() === req.userid) {
            msg.message = message;
            await msg.save();
            await msg.populate('sender', 'username');
            return res.status(200).json({ message: "Message updated successfully", chat: msg });
        }
        else {
            return res.status(403).json({ message: "Unauthorized to edit this message" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Error editing message", error });
    }
};
//# sourceMappingURL=chat.js.map
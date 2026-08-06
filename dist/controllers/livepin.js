import { rooms } from '../models/room.js';
import { pincards } from '../models/pincard.js';
// Added GET HTTP route controller for live pin to get all cards instead of rooms
// Reason: The user requested that we need all cards get route not rooms
export const getLivePin = async (req, res) => {
    try {
        const allCards = await pincards.find({});
        res.status(200).json({ cards: allCards });
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching cards" });
    }
};
// Added DELETE HTTP route controller for live pin
// Reason: The user requested to create a DELETE route
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
// Added DELETE HTTP route controller for live pin card
// Reason: The user requested to add delete for the live pin card
export const deleteLivePinCard = async (req, res) => {
    try {
        const { cardId } = req.params;
        await pincards.deleteOne({ cardId });
        res.status(200).json({ message: "Pin card deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting pin card" });
    }
};
//# sourceMappingURL=livepin.js.map
import { Youtube } from "../models/youtubeModel.js";
export const saveYoutube = async (req, res) => {
    try {
        const { url, title, description } = req.body;
        const userId = req.userid;
        if (!userId) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        if (!url) {
            res.status(400).json({ message: "URL is required" });
            return;
        }
        const newYoutube = new Youtube({
            userId,
            url,
            title,
            description
        });
        await newYoutube.save();
        res.status(201).json({ message: "Youtube link saved successfully", data: newYoutube });
    }
    catch (error) {
        console.error("Error saving youtube link:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
export const updateYoutube = async (req, res) => {
    try {
        const { id } = req.params;
        const { url, title, description } = req.body;
        const userId = req.userid;
        if (!userId) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        const updatedYoutube = await Youtube.findOneAndUpdate({ _id: id, userId }, { url, title, description }, { new: true });
        if (!updatedYoutube) {
            res.status(404).json({ message: "Youtube link not found or unauthorized" });
            return;
        }
        res.status(200).json({ message: "Youtube link updated successfully", data: updatedYoutube });
    }
    catch (error) {
        console.error("Error updating youtube link:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
export const deleteYoutube = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userid;
        if (!userId) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        const deletedYoutube = await Youtube.findOneAndDelete({ _id: id, userId });
        if (!deletedYoutube) {
            res.status(404).json({ message: "Youtube link not found or unauthorized" });
            return;
        }
        res.status(200).json({ message: "Youtube link deleted successfully", data: deletedYoutube });
    }
    catch (error) {
        console.error("Error deleting youtube link:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
//# sourceMappingURL=youtube.js.map
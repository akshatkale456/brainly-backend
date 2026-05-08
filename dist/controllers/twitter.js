import { Twitter } from "../models/twitterModel.js";
export const saveTwitter = async (req, res) => {
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
        const newTwitter = new Twitter({
            userId,
            url,
            title,
            description
        });
        await newTwitter.save();
        res.status(201).json({ message: "Twitter link saved successfully", data: newTwitter });
    }
    catch (error) {
        console.error("Error saving twitter link:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
export const updateTwitter = async (req, res) => {
    try {
        const { id } = req.params;
        const { url, title, description } = req.body;
        const userId = req.userid;
        if (!userId) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        const updatedTwitter = await Twitter.findOneAndUpdate({ _id: id, userId }, { url, title, description }, { new: true });
        if (!updatedTwitter) {
            res.status(404).json({ message: "Twitter link not found or unauthorized" });
            return;
        }
        res.status(200).json({ message: "Twitter link updated successfully", data: updatedTwitter });
    }
    catch (error) {
        console.error("Error updating twitter link:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
export const deleteTwitter = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userid;
        if (!userId) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        const deletedTwitter = await Twitter.findOneAndDelete({ _id: id, userId });
        if (!deletedTwitter) {
            res.status(404).json({ message: "Twitter link not found or unauthorized" });
            return;
        }
        res.status(200).json({ message: "Twitter link deleted successfully", data: deletedTwitter });
    }
    catch (error) {
        console.error("Error deleting twitter link:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
//# sourceMappingURL=twitter.js.map
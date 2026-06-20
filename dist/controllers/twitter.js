import { twitters } from "../models/twitter.js";
export const twitter = async (req, res) => {
    const userid = req.userid;
    const title = req.body.title;
    const link = req.body.link;
    const priority = req.body.priority || "low";
    try {
        const result = await twitters.create({
            title,
            link,
            userid,
            priority
        });
        if (!result) {
            return res.status(500).json({
                success: false,
                message: "Failed to save the twitter post"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Twitter post saved successfully",
            twitter: result
        });
    }
    catch (e) {
        console.error("Error saving twitter:", e);
        return res.status(500).json({
            success: false,
            message: "Internal server error saving twitter post",
            error: e.message
        });
    }
};
export const deletetwitter = async (req, res) => {
    const twitterId = req.params.twitterid;
    try {
        const result = await twitters.deleteOne({
            _id: twitterId
        });
        if (result.deletedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "Twitter post not found"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Twitter post deleted successfully"
        });
    }
    catch (e) {
        console.error("Error deleting twitter:", e);
        return res.status(500).json({
            success: false,
            message: "Internal server error deleting twitter post",
            error: e.message
        });
    }
};
export const updatetwitter = async (req, res) => {
    const { title, link, priority } = req.body;
    const twitterId = req.params.twitterid;
    try {
        const update = {};
        if (title !== undefined)
            update.title = title;
        if (link !== undefined)
            update.link = link;
        if (priority !== undefined)
            update.priority = priority;
        const result = await twitters.updateOne({ _id: twitterId }, { $set: update });
        if (result.matchedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "Twitter post not found"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Twitter post updated successfully"
        });
    }
    catch (e) {
        console.error("Error updating twitter:", e);
        return res.status(500).json({
            success: false,
            message: "Internal server error updating twitter post",
            error: e.message
        });
    }
};
export const gettwitter = async (req, res) => {
    const userid = req.userid;
    try {
        const response = await twitters.find({ userid });
        if (!response) {
            return res.status(404).json({
                success: false,
                message: "No Twitter posts found"
            });
        }
        return res.status(200).json({
            success: true,
            data: response
        });
    }
    catch (e) {
        console.error("Error fetching twitter posts:", e);
        return res.status(500).json({
            success: false,
            message: "Internal server error fetching Twitter posts",
            error: e.message
        });
    }
};
//# sourceMappingURL=twitter.js.map
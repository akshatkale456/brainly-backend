import crypto from "crypto";
import { users } from "../models/usermodal.js";
import { youtubes } from "../models/youtube.js";
import { twitters } from "../models/twitter.js";
import { todos } from "../models/todo.js";
export const generateShareLink = async (req, res) => {
    try {
        const userId = req.userid;
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const user = await users.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (!user.token) {
            user.token = crypto.randomBytes(16).toString('hex');
            await user.save();
        }
        return res.status(200).json({ token: user.token });
    }
    catch (error) {
        console.error("Error generating share link:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
export const share = async (req, res) => {
    try {
        const token = req.params.token;
        const fetchuser = await users.findOne({
            token
        });
        if (!fetchuser) {
            return res.status(400).json({
                "message": "brain not found"
            });
        }
        const hiddenid = fetchuser._id;
        const [youtube, twitter, todo] = await Promise.all([
            youtubes.find({ userid: hiddenid }),
            twitters.find({ userid: hiddenid }),
            todos.find({ userid: hiddenid })
        ]);
        return res.status(200).json({
            user: {
                firstName: fetchuser.firstName,
                lastName: fetchuser.lastName,
            },
            youtube,
            twitter,
            todo
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};
//# sourceMappingURL=share.js.map
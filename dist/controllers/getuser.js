import { users } from "../models/usermodal.js";
import 'dotenv/config';
const BASE_URL = "http://localhost:3000/avatar";
export const getuser = async (req, res) => {
    try {
        const userId = res.locals.userId;
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized request. User ID missing."
            });
        }
        const user = await users.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }
        return res.status(200).json({
            success: true,
            User: {
                name: user.firstName + "" + user.lastName,
                url: user.profilePic ? `${BASE_URL}/${user.profilePic}` : ""
            }
        });
    }
    catch (error) {
        console.error("Error fetching user:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};
//# sourceMappingURL=getuser.js.map
import { users } from "../models/usermodal.js";
export const getMe = async (req, res) => {
    const customreq = req;
    try {
        const user = await users.findById(customreq.userid);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.json({
            User: {
                url: user.profilePic ? `/uploads/${user.profilePic}` : "",
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ message: "Something went wrong" });
    }
};
//# sourceMappingURL=me.js.map
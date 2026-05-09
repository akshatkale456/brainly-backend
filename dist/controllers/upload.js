import { users } from "../models/usermodal.js";
export const avatar = async (req, res) => {
    const customreq = req;
    const _id = customreq.userid;
    const name = req.file?.filename;
    console.log(name);
    try {
        if (name) {
            await users.updateOne({ _id }, {
                $set: {
                    "profilePic": name
                }
            });
            return res.json({
                message: "file uploaded",
                filename: name
            });
        }
        else {
            return res.status(400).json({
                "message": "image not uploaded"
            });
        }
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "something went wrong"
        });
    }
};
//# sourceMappingURL=upload.js.map
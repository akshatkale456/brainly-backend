import Jwt from "jsonwebtoken";
import "dotenv/config";
export const authimiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(400).json({
            success: false,
            message: "token does not found "
        });
    }
    const decodedtoken = Jwt.verify(token, process.env.SECRET_KEY);
    req.body.id = decodedtoken;
    console.log(decodedtoken);
    next();
};
//# sourceMappingURL=autthmiddleware.js.map
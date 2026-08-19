import Jwt from "jsonwebtoken";
import "dotenv/config";
export const authimiddleware = (req, res, next) => {
    try {
        console.log("1. Entered Auth");
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(400).json({
                success: false,
                message: "token does not found "
            });
        }
        const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;
        if (token === undefined) {
            return;
        }
        const decodedtoken = Jwt.verify(token, process.env.JWT_SECRET);
        res.locals.userId = decodedtoken.user_id;
        req.userid = decodedtoken.user_id;
        console.log(decodedtoken);
        console.log("2. Exit");
        next();
    }
    catch (error) {
        console.error("Auth Middleware Error:", error);
        return res.status(401).json({
            success: false,
            message: "Invalid token format"
        });
    }
};
//# sourceMappingURL=autthmiddleware.js.map
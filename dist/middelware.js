import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();
const secret = process.env.SECRET_KEY;
export const usermiddleware = async (req, res, next) => {
    const header = req.headers["authorization"];
    const decode = jwt.verify(header, secret);
    if (decode) {
        // @ts-ignore
        req.userid = decode.id;
    }
    next();
};
//# sourceMappingURL=middelware.js.map
import express from "express";
import bcrypt from "bcrypt";
import Z from "zod";
import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import { usermiddleware } from "./middelware.js";
import mongoose from "mongoose";
import { UserModel } from "./db.js";
const app = express();
app.use(express.json());
app.post("/api/v1/signin", async (req, res) => {
    const verify = Z.object({
        username: Z.string("it should be string").max(46, "characternot more than 8 ").min(3, "character not should be lessn than 8"),
        password: Z.string("it should be string").max(10, "characternot more than 8 ").min(3, "character not should be lessn than 8"),
        email: Z.string().email("type in correct order")
    });
    const parsed = verify.safeParse(req.body);
    if (!parsed.success) {
        res.status(400).json({
            error: parsed.error.message
        });
        return;
    }
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const userFind = await UserModel.findOne({
        username: username,
        email: email,
    });
    if (!userFind) {
        res.json({
            "message": "password is incorrect"
        });
        return;
    }
    else {
        const compare = await bcrypt.compare(password, userFind.password);
        if (!compare) {
            res.status(401).json({
                "message": "password is incorrect"
            });
            return;
        }
        const secret = process.env.SECRET_KEY;
        const token = jwt.sign({ userId: userFind._id.toString() }, secret);
        res.json({
            token: token
        });
    }
});
app.post("/api/v1/add", usermiddleware, (req, res) => {
    res.json({
        "message": "hello ji "
    });
});
app.listen(3004);
//# sourceMappingURL=signin.js.map
import express from "express";
import bcrypt from "bcrypt";
import Z from "zod";
import mongoose from "mongoose";
import { UserModel } from "./db.js";
const app = express();
app.use(express.json());
app.post("/api/v1/signup", async (req, res) => {
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
    try {
        const hashed = await bcrypt.hash(password, 5);
        await UserModel.create({
            username: username,
            email: email,
            password: hashed
        });
        res.status(201).json({ message: "User created successfully" });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create user" });
    }
});
app.listen(3003);
//# sourceMappingURL=signup.js.map
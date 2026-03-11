import mongoose, { Model } from "mongoose";
import { Schema, model, Types } from "mongoose";
mongoose.connect("mongodb+srv://akshat12:akshatkale321@cluster0.r4wojpd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
const user = new Schema({
    username: String,
    email: String,
    password: String
});
const todos = new Schema({
    title: String,
    discription: String,
    compelete: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true
});
const todo = new Schema({
    userid: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    content: [todos],
    compelete: {
        type: Boolean,
        default: false
    }
});
export const UserModel = model("users", user);
export const todoModel = model("todos", todo);
//# sourceMappingURL=db.js.map
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const todoSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        default: ""
    },
    status: {
        type: String,
        enum: ['completed', 'incomplete'],
        default: 'incomplete'
    },
    priority: {
        type: String,
        enum: ['high', 'medium', 'low'],
        default: 'medium'
    }
}, {
    timestamps: true,
});
export const Todo = mongoose.model('todo', todoSchema);
//# sourceMappingURL=todoModel.js.map
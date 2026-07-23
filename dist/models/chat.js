import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const chatSchema = new Schema({
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'room',
        required: true
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});
export const chats = mongoose.model('chat', chatSchema);
//# sourceMappingURL=chat.js.map
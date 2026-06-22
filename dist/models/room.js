import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const roomSchema = new Schema({
    roomid: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    activeUser: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }],
    roomName: {
        type: String,
        trim: true
    },
    ownerid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
}, {
    timestamps: true
});
export const rooms = mongoose.model('room', roomSchema);
//# sourceMappingURL=room.js.map
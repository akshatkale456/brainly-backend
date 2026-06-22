import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const pincardSchema = new Schema({
    cardId: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    roomId: {
        type: String,
        required: true,
        trim: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    coordinates: {
        x: {
            type: Number,
            required: true
        },
        y: {
            type: Number,
            required: true
        }
    }
}, {
    timestamps: true
});
export const pincards = mongoose.model('pincard', pincardSchema);
//# sourceMappingURL=pincard.js.map
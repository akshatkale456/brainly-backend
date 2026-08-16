import mongoose from "mongoose";
const Schema = mongoose.Schema;
const eventSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        trim: true
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
}, {
    timestamps: true
});
export const events = mongoose.model('event', eventSchema);
//# sourceMappingURL=event.js.map
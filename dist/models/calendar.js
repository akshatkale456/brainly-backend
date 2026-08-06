import mongoose from "mongoose";
const Schema = mongoose.Schema;
const calendarSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
}, {
    timestamps: true
});
export const calendars = mongoose.model('calendar', calendarSchema);
//# sourceMappingURL=calendar.js.map
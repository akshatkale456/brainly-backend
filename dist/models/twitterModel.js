import mongoose from "mongoose";
const Schema = mongoose.Schema;
const twitterSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    url: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        trim: true,
        default: ""
    },
    description: {
        type: String,
        trim: true,
        default: ""
    }
}, {
    timestamps: true,
});
export const Twitter = mongoose.model('twitter', twitterSchema);
//# sourceMappingURL=twitterModel.js.map
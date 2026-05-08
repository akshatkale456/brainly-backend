import mongoose from "mongoose";
const Schema = mongoose.Schema;
const youtubeSchema = new Schema({
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
export const Youtube = mongoose.model('youtube', youtubeSchema);
//# sourceMappingURL=youtubeModel.js.map
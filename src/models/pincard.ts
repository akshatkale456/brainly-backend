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
  },
  title: {
    type: String,
  },
  link: {
    type: String,
  },
  type: {
    type: String,
    default: 'pin'
  },
  priority: {
    type: String,
    enum: ['high', 'medium', 'low'],
    default: 'low'
  },
}, {
  timestamps: true
});
export const pincards = mongoose.model('pincard', pincardSchema);
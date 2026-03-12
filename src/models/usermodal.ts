import mongoose from "mongoose";
import 'dotenv/config';

const dbUrl = process.env.DB_URL ;
if ( dbUrl === undefined){
 console.error("DB_url is not defined")
}
else{
mongoose.connect(dbUrl)
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));}

const Schema = mongoose.Schema;

const userschema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  hashedpassword: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true,
});

export const users = mongoose.model('user', userschema);

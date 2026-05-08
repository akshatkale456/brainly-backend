import mongoose from "mongoose"
const Schema = mongoose.Schema;
const youtubeschema = new Schema({
    title :{
        type:String,
        trim:true,
        required:true

    },
    link:{
        type:String,
        required:true,
        trim:true  
        
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },

   priority: {
        type:String,
        required:true,
        trim:true
    }
    


})
export const users = mongoose.model('youtube', youtubeschema);
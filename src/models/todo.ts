import mongoose from "mongoose"

const Schema = mongoose.Schema;
const todoschema = new Schema({
    title :{
        type:String,
        trim:true,
        required:true

    },
    complete:{
        type:Boolean,
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

export const todos = mongoose.model('todo', todoschema );
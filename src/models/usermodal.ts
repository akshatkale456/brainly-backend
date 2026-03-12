import mongoose from "mongoose";
import { required } from "zod/mini";
const Schema = mongoose.Schema
const userschema = new Schema({
      firstName:{
        type:String,
        required:true,
        trim:true
        
      },
            lastName:{
        type:String,
        required:true,
        trim:true
        
      },
            email:{
        type:{String,unique:true},
        required:true,
        trim:true
        
      },
            password:{
        type:String,
        required:true,
        trim:true
        
      }
      
           
},{
    timestamps: true,
}) 
 export const users = mongoose.model('user' , userschema )
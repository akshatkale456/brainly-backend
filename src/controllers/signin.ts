import  type { Request,Response } from "express";
import {signinSchema } from "../schema/schemas.js";
import jwt from "jsonwebtoken"
import { users } from "../models/usermodal.js";
import 'dotenv/config'
import bcrypt from "bcrypt"
// const jwt_secret = process.env.JWT_SECRET
// if(jwt_secret === undefined){
//     console.error("jwt_secret is not defined")

export const signin = async(req:Request,res:Response)=>{
      
      const email = req.body.email;
      const password = req.body.password;
     

      const validationresult = signinSchema.safeParse({
            email,
            password
      });
      if(!validationresult.success){
          return res.status(400).json({
               success: false,
               error:validationresult.error.format() 
          })
      }
      else{
        const user = await users.findOne({
            email:email
        })
        if( !user||user?.hashedpassword === undefined ||user.hashedpassword === null){
            return res.status(400).json({
                success:false,
                message:"user not found"
            })
        }else{
        const checkpassword =  await bcrypt.compare(password,user.hashedpassword)
      

        const token = jwt.sign({user_id:user._id},process.env.JWT_SECRET as string)
        
      
        
        return res.status(200).json({
            token:token ,
            message:"signin succesfull",
            success:true
        })
      }
      }
};
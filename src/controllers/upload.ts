
import { users } from "../models/usermodal.js"
import type { AuthRequest } from "../types/type.js"
import type { Response } from "express"

const avatar = async (req:AuthRequest,res:Response)=>{
    const _id = req.userid
    const name = req.file?.filename
    console.log(name)
    try{if ( name ){
    await users.updateOne ({_id},{
    $set:{
        "profilePic":name
    }

    })
return res.json({
    message:"file uploaded"
})}
    else{
        
        return res.status(400).json({
             "message":"image not uploaded"
        })
    }



}catch(e){
    console.log(e)

    return  res.status(400).json({
        message:"something went wron"
     })
}}
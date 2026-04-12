import multer from "multer"
import  type { Destination, } from "../types/type.js"
import type { filename } from "../types/type.js"
const destination:Destination = (req,file,cb)=>{
        cb(null,"uploads/")
    }
     const Filename:filename = (req,file,cb)=>{
        cb( null,Date.now+"-"+file.originalname)
     }
const storage = multer.diskStorage({
    destination:destination,
    filename : Filename
})
export  const upload = multer({
     storage:storage,
     limits:{
        fileSize:5 * 1024 * 1024,
     }
})
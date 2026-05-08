 import type { Request } from "express"
  
 export interface AuthRequest extends Request {
    userid?: string; 
}
export interface updateavatar extends Request{
     userid?: string;
    file?: Express.Multer.File; 
}

import multer from "multer"
import { upload } from "../middlewares/upload.js"
import type { Request,NextFunction,Response } from "express"
export const multererror = (req: Request, res: Response, next: NextFunction) => {
        console.log("-> Entered multererror wrapper");
        upload.single('avatar')(req, res, (err) => {
            console.log("-> Inside multer callback. Error:", err ? err.message : "None");
            if (err instanceof multer.MulterError) {
                console.error("Multer error:", err) // ← will tell you exactly what's wrong
                return res.status(400).json({ success: false, message: err.message })
            } else if (err) {
                console.error("Unknown error:", err)
                return res.status(500).json({ success: false, message: err.message })
            }
            console.log("-> Calling next() from multer callback");
            next()
        })
    }
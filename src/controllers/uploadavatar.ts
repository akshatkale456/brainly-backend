import type { Request, Response } from 'express';
import { users } from '../models/usermodal.js';
import type { updateavatar } from '../types/type.js';


export const uploadavatar = async (req: updateavatar, res: Response) => {
    try {
        console.log("3. Entered avatar")
        // 1. Get userId from res.locals (set by auth middleware)
        // const userId = res.locals.userId;
        const userId = req.userid

        // 2. Check if file is present in req.file
        if (!req.file) {
             return res.status(400).json({
                success: false,
                message: "No file uploaded"
             })
        }

        // 3. Extract the filename or path from req.file
        const filename = req.file.filename; 
        const fileSize = req.file.size
        const filepath = req.file.path
        const filetype = req.file.mimetype
        if(filetype !== "image/jpeg" &&
            filetype !=="image/png"
        ){
            console.log("nahi chala")
            return res.status(400).json({
                success:false,
                message:"Invalid file type"
                
            })
        }
        if(fileSize > 5 * 1024 * 1024){
            return res.status(400).json({
                success:false,
                message:"File size should be less than 5MB"
            })
        }
        console.log( fileSize)
        console.log("chalgya")
        
 const response = await users.findByIdAndUpdate(userId,{profilePic:filename})
        // 4. Update the user document in MongoDB with the new profile pic filename/path
        // const updatedUser = await users.findByIdAndUpdate(userId, { profilePic: filename }, { new: true });
        if(!response){
            return res.status(400).json({
                message:"user not found"
            })
        }
        // 5. Chieck if user exists 
        // if (!updatedUser) {
        //     return res.status(404).json({ success: false, message: "User not found" });
        // }

        // 6. Return success response (e.g., status 200) with the updated image URL/filename
        return res.status(200).json({
            success: true,
            message: "Profile picture uploaded successfully",
            // profilePic: updatedUser.profilePic
        });

    } catch (error) {
        console.error("Error uploading profile picture:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

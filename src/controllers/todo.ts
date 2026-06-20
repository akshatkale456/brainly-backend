import type { AuthRequest } from "../types/type.js";
import { todos } from "../models/todo.js";
import type { Response } from "express";


export const todo = async (req: AuthRequest, res: Response) => {
    
    const userid = req.userid
    console.log(userid + " nahi ayi ")
    const title = req.body.title
    console.log(title)
    const priority = req.body.priority
    console.log(priority)
    const complete = req.body.compelete
    console.log(complete)
    try {
        const result = await todos.create({
            title,
            userid,
            complete,
            priority
        })
        if (!result) {
            return res.status(500).json({
                message: "not saved"
            })
        }
        else {
            return res.status(200).json({
                message: "todo saved",
                id: result._id
            })
        }

    } catch (e) {
        console.log(e + "have some error to save the  todo ")
        return res.status(500).json({
            message: "internal server error"
        })
    }
}
export const gettodo = async(req:AuthRequest,res:Response)=>{
    const userid = req.userid
    console.log(userid+"yha get pe request ayi hai")
     const data = await todos.find({ userid })
     console.log(data)
     if(!data){
         return res.status(400).json({
        "message":"user not found"
         })
     }
     else{
         return res.status(200).json({
            "data":data
         })
     }
    
}

export const deletetodo = async (req: AuthRequest, res: Response) => {
    const todo = req.params.todoid

    try {
        const result = await todos.deleteOne({
            _id: todo
        })
        if (result.deletedCount === 0) {
            return res.status(404).json({
                message: "item not found"
            })
        }
        return res.status(200).json({
            message: "item deleted successfully"
        })
    } catch (e) {
        console.log(e + "have some error to delete the  todo ")
        return res.status(500).json({
            message: "internal server error"
        })
    }
}

export const updatetodo = async (req: AuthRequest, res: Response) => {
    const { title, complete, priority } = req.body
    const todo = req.params.todoid

    try {
        const update: any = {}
        if (title !== undefined) update.title = title
        if (complete !== undefined) update.complete = complete
        if (priority !== undefined) update.priority = priority

        const result = await todos.updateOne(
            { _id: todo },
            { $set: update }
        )
        if (result.matchedCount === 0) {
            return res.status(404).json({
                message: "item not found"
            })
        }
        else {
            return res.status(200).json({
                message: "update successfully"
            })
        }

    } catch (e) {
        console.log(e + "have some error to update the  todo ")
        return res.status(500).json({
            message: "internal server error"
        })
    }
}
import { Todo } from "../models/todoModel.js";
export const saveTodo = async (req, res) => {
    try {
        const { title, description, status, priority } = req.body;
        const userId = req.userid;
        if (!userId) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        if (!title) {
            res.status(400).json({ message: "Title is required" });
            return;
        }
        const newTodo = new Todo({
            userId,
            title,
            description,
            status,
            priority
        });
        await newTodo.save();
        res.status(201).json({ message: "Todo saved successfully", data: newTodo });
    }
    catch (error) {
        console.error("Error saving todo:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
export const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, status, priority } = req.body;
        const userId = req.userid;
        if (!userId) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        const updatedTodo = await Todo.findOneAndUpdate({ _id: id, userId }, { title, description, status, priority }, { new: true });
        if (!updatedTodo) {
            res.status(404).json({ message: "Todo not found or unauthorized" });
            return;
        }
        res.status(200).json({ message: "Todo updated successfully", data: updatedTodo });
    }
    catch (error) {
        console.error("Error updating todo:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
export const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userid;
        if (!userId) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        const deletedTodo = await Todo.findOneAndDelete({ _id: id, userId });
        if (!deletedTodo) {
            res.status(404).json({ message: "Todo not found or unauthorized" });
            return;
        }
        res.status(200).json({ message: "Todo deleted successfully", data: deletedTodo });
    }
    catch (error) {
        console.error("Error deleting todo:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
//# sourceMappingURL=todo.js.map
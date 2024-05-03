const Todo = require('../models/todoModel.js');

// Create a new Todo
exports.AddTodo =  async (req, res) => {
    try {
        const todo = new Todo(req.body);
        await todo.save();
        res.status(201).json(todo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all Todo

exports.GetTodo = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get specific Todo

exports.SpecificTodo = async(req, res) => {
    try {
        const todo = await Todo.findById(req.params.id)
        res.status(200).json(todo)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

// Update Todo

exports.EditTodo = async(req, res) => {
    try {
        const todoEdit = await Todo.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(todoEdit);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
};


// Detele todo

exports.deleteTodo = async(req, res) => {
    try {
        const TodoId = req.params.id
        await Todo.findByIdAndDelete(TodoId)
        res.status(200).json({message: "Todo deleted successfully"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

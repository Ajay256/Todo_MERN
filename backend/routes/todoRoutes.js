const express = require('express');

const {AddTodo, GetTodo, SpecificTodo, EditTodo, deleteTodo} = require('../controllers/todoController.js')

const router = express.Router();

router.get('/', GetTodo)
router.post('/', AddTodo)
router.get('/:id', SpecificTodo)
router.patch('/:id', EditTodo)
router.delete('/:id', deleteTodo)

module.exports = router
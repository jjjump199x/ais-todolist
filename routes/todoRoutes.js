const todoRoute = require('../controllers/todoController')
const express = require ('express');
const { deleteTask } = require('../controllers/todoController');
const router = express.Router();

router.post('/add', todoRoute.addTask)

router.get('/', todoRoute.getTask);

router.post('/:id', todoRoute.deleteTask)

router.post('/update/:id', todoRoute.updateTask)


module.exports = router;
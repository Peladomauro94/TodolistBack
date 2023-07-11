const express = require('express')
const router = express.Router()
const taskControllers = require('../Controllers/tasks')

router.get('/tasks', taskControllers.read)

router.get('/tasks/:id', taskControllers.readOne)

router.post('/tasks/', taskControllers.create)

router.put('/tasks/:id', taskControllers.update)

router.delete('/tasks/:id', taskControllers.del)

module.exports = router
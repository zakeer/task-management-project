import express from 'express'
import { getTasks, getTaskById, createTask, updateTask, deleteTask } from '../controller/TaskController.js'
import { authenticate } from '../middleware/auth.js'

const router = express.Router()

router.get('/tasks', authenticate, getTasks)
router.get('/tasks/:id', authenticate, getTaskById)
router.post('/tasks', authenticate, createTask)
router.patch('/tasks/:id', authenticate, updateTask)
router.delete('/tasks/:id', authenticate, deleteTask)

export default router

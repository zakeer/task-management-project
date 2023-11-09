import express from 'express'
import { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from '../controller/CategoryController.js'
import { authenticate } from '../middleware/auth.js'

const router = express.Router()

router.get('/categories', getCategories)
router.get('/categories/:id', getCategoryById)
router.post('/addNewCategory', createCategory)
router.patch('/categories/:id', authenticate, updateCategory)
router.delete('/categories/:id', authenticate, deleteCategory)

export default router

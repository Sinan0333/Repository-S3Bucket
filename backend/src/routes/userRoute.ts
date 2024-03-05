import express from 'express'
import userController from '../controllers/userController'

const router = express.Router()


router.post('/signup',userController.signup)
router.get('/upload',userController.uploadImg)

export default router
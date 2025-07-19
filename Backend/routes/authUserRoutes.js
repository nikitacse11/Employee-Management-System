import { Router } from 'express'
import {
    loginSchema,
} from '../utils/validationSchema.js'
import { validationHandler } from '../middlewares/validationHandler.js'
import { adminLogin } from '../controllers/authUserController.js'

const router = Router()

router
    .route('/login-admin')
    .post(loginSchema, validationHandler, adminLogin)

export default router;
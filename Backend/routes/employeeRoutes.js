import { Router } from 'express'
import { createEmployeeSchema } from '../utils/validationSchema.js'

const router = Router()

router
    .route('/create-employee')
    .post(createEmployeeSchema, validationHandler, authenticateToken([userTypes.ADMIN]), createEmployee)
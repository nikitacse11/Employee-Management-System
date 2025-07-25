import { Router } from 'express'
import { createEmployeeSchema } from '../utils/validationSchema.js'
import { validationHandler } from '../middlewares/validationHandler.js'
import { authenticateToken } from '../middlewares/authentication.js'
import { createEmployee, getEmployees, deleteEmployee } from '../controllers/employeeController.js'
import { userTypes } from '../utils/stringConstant.js'


const router = Router()

router
    .route('/create-employee')
    .post(createEmployeeSchema, validationHandler, authenticateToken([userTypes.ADMIN]), createEmployee)
router.route('/all-employees').get(authenticateToken([userTypes.ADMIN]),getEmployees)
router.route('/delete-employee').delete(authenticateToken([userTypes.ADMIN]),deleteEmployee)


export default router
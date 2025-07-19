import { body } from 'express-validator';

const createAdminSchema = [
    body('name')
        .notEmpty()
        .withMessage('Name is required field')
        .bail()
        .matches(/^[a-zA-Z\s]{3,25}$/)
        .withMessage('Invalid name format'),
    body('email')
        .notEmpty()
        .withMessage('Email is required field')
        .bail()
        .isEmail()
        .withMessage('Invalid email address'),
    body('userType')
        .notEmpty()
        .withMessage('User type is required field')
        .bail()
        .custom(async (value) => {
            if (value != 'Admin') {
                throw new Error('User type must be a Admin')
            }
        }),
    body('password').notEmpty().withMessage('Password is required field'),
]

const loginSchema = [
    body('email').notEmpty().withMessage('Email is required field'),
    body('password').notEmpty().withMessage('Password is required field'),
]

export { createAdminSchema, loginSchema };
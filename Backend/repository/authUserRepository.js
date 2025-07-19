import { Admin } from '../schemas/adminSchema.js'

const loginAdmin = async (data) => {
    try {
        const existAdmin = await Admin.findOne({ email: data.email })
        if (existAdmin) {
            return existAdmin
        } else {
            throw new Error("Admin doesn't exist")
        }
    } catch (error) {
        throw error
    }
}

export { loginAdmin }
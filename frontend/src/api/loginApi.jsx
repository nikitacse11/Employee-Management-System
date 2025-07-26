import axios from 'axios'
// ----------------------loginAdminAPI-----------------------------------------------

export const loginAdmin = async (data) => {
    try {
        const response = await axios.post(
            `http://localhost:8080/auth/login-admin`,
            {
                email: data.email,
                password: data.password,
            }
        )
        // console.log("data", response.data);
        return response
    } catch (error) {
        // console.log("error : ", error);
        return error.response
    }
}
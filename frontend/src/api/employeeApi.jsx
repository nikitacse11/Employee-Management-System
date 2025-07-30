import axios from 'axios'

// ----------------------GetData-----------------------------------------------

export const getEmployees = async () => {
    try {
        // const headers = {
        //     'Authorization': `Bearer ${accessToken}`
        // };
        const response = await axios.get(
            `http://localhost:8080/api/all-employees`
        )
        return response
    } catch (error) {
        return error.response
    }
}

// -----------------------------CreateData---------------------------------------

export const createEmployee = async (form_data) => {
    try {
        // const headers = {
        //     'Authorization': `Bearer ${accessToken}`
        // };
        const response = await axios.post(
            'http://localhost:8080/api/create-employee',
            {
                // userType: form_data.userType,
                name: form_data.name,
                email: form_data.email,
                phone: form_data.phone,
                designation: form_data.designation,
                department: form_data.department,
                salary: form_data.salary,
                date_of_joining: form_data.date_of_joining,
            }
            // },{headers:headers}
        )
        // console.log(response);
        return response
    } catch (error) {
        // console.log("error:", error);
        return error.response
    }
}

//--------------------------------DeleteData------------------------------------------

export const deleteEmployee = async (employee_id,accessToken) => {
    // console.log("authID:", employee_id)
    try {
        const headers = {
            'Authorization': `Bearer ${accessToken}`
        };
        const response = await axios.delete(
            `http://localhost:8081/api/delete-employee?employeeId=${employee_id}`,{headers:headers}
        )
        // console.log(response)
        return response
    } catch (error) {
        // console.log("autherror", error)
        return error.response
    }
}

//---------------------------------EditData------------------------------------------

export const editEmployee = async (form_data,accessToken) => {
    try {
        const headers = {
            'Authorization': `Bearer ${accessToken}`
        };
        const response = await axios.put(
            'http://localhost:8081/api/edit-employee',
            {
                userType: form_data.userType,
                employeeId: form_data.id,
                name: form_data.name,
                email: form_data.email,
                phone: form_data.phone,
                designation: form_data.designation,
                department: form_data.department,
                salary: form_data.salary,
                date_of_joining: form_data.date_of_joining,
            },{headers:headers}
        )
        // console.log(response);
        return response
    } catch (error) {
        return error.response
    }
}

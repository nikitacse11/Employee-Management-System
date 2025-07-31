import "./createEmployee.css";
import { useFormik } from "formik";
import { employeeSchema } from "../../../../schemas/employeeSchema";
import { createEmployee } from "../../../../api/employeeApi";
import { toast } from "react-toastify";
function CreateEmployee(props) {
  const initialState = {
    id: "",
    name: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    salary: "",
    date_of_joining: "",
  };

  const createNewEmployee = async (form_data) => {
    const res = await createEmployee(form_data);
    if (res && res.data.responseCode === 401) {
      toast.error(res.data.errMessage);
    } else if (res && res.status === 201) {
      toast.success(res.data.resMessage);
    } else if (res && res.status === 400) {
      // console.log("error")
      toast.error(res.data.errMessage);
    } else {
      toast.error("Something went wrong...");
    }
    return res;
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: employeeSchema,

    onSubmit: async (values, action) => {
      console.log("Form values on submit:", values);
      console.log(formik);
      await createNewEmployee(values);
      console.log("values", values);
      action.resetForm();
      props.onClose();
    },
  });
  return (
    <div className="createUser">
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="modal-header mb-3 d-flex justify-content-between">
          <h4 className="modal-title" id="exampleModalLabel">
            Enter Details
          </h4>
        </div>

        <div className="modal-body">
          <div className="form-floating mb-3">
            <input
              type="text"
              className={`form-control ${
                formik.errors.name && formik.touched.name
                  ? "border border-danger "
                  : ""
              }`}
              name="name"
              id="name"
              placeholder="Enter Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{
                borderColor:
                  formik.errors.name && formik.touched.name ? "red" : "",
              }}
            />
            <label htmlFor="name">Name</label>
            {formik.errors.name && formik.touched.name ? (
              <p className="form_error">{formik.errors.name}</p>
            ) : null}
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className={`form-control ${
                formik.errors.email && formik.touched.email
                  ? "border border-danger "
                  : ""
              }`}
              name="email"
              id="email"
              placeholder="Enter Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{
                borderColor:
                  formik.errors.email && formik.touched.email ? "red" : "",
              }}
            />
            <label htmlFor="email">Email</label>
            {formik.errors.email && formik.touched.email ? (
              <p className="form_error">{formik.errors.email}</p>
            ) : null}
          </div>

          <div className="form-floating mb-3">
            <input
              type="tel"
              className={`form-control ${
                formik.errors.phone && formik.touched.phone
                  ? "border border-danger "
                  : ""
              }`}
              name="phone"
              id="phone"
              placeholder="Enter Phone Number"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{
                borderColor:
                  formik.errors.phone && formik.touched.phone ? "red" : "",
              }}
            />
            <label htmlFor="phone">Phone</label>
            {formik.errors.phone && formik.touched.phone ? (
              <p className="form_error">{formik.errors.phone}</p>
            ) : null}
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className={`form-control ${
                formik.errors.designation && formik.touched.designation
                  ? "border border-danger "
                  : ""
              }`}
              name="designation"
              id="designation"
              placeholder="Enter Designation"
              value={formik.values.designation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{
                borderColor:
                  formik.errors.designation && formik.touched.designation
                    ? "red"
                    : "",
              }}
            />
            <label htmlFor="designation">Designation</label>
            {formik.errors.designation && formik.touched.designation ? (
              <p className="form_error">{formik.errors.designation}</p>
            ) : null}
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className={`form-control ${
                formik.errors.department && formik.touched.department
                  ? "border border-danger "
                  : ""
              }`}
              name="department"
              id="department"
              placeholder="Enter Department"
              value={formik.values.department}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{
                borderColor:
                  formik.errors.department && formik.touched.department
                    ? "red"
                    : "",
              }}
            />
            <label htmlFor="department">Department</label>
            {formik.errors.department && formik.touched.department ? (
              <p className="form_error">{formik.errors.department}</p>
            ) : null}
          </div>

          <div className="form-floating mb-3">
            <input
              className={`form-control ${
                formik.errors.salary && formik.touched.salary
                  ? "border border-danger "
                  : ""
              }`}
              type="number"
              id="salary"
              name="salary"
              value={formik.values.salary}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter salary"
              style={{
                borderColor:
                  formik.errors.salary && formik.touched.salary ? "red" : "",
              }}
            />
            <label htmlFor="salary">Salary</label>
            {formik.errors.salary && formik.touched.salary ? (
              <p className="form_error">{formik.errors.salary}</p>
            ) : null}
          </div>
          <div className="form-floating mb-4">
            <input
              type="date"
              className="form-control"
              name="date_of_joining"
              id="date_of_joining"
              placeholder="Enter DOJ"
              value={formik.values.date_of_joining}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{
                borderColor:
                  formik.errors.date_of_joining &&
                  formik.touched.date_of_joining
                    ? "red"
                    : "",
              }}
            />
            <label htmlFor="date_of_joining">Date of Joining</label>
            {formik.errors.date_of_joining && formik.touched.date_of_joining ? (
              <p className="form_error">{formik.errors.date_of_joining}</p>
            ) : null}
          </div>

          <div className="form-floating mb-4 text-center">
            <button className="submit_btn" type="submit">
              Submit Data
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default CreateEmployee;

import './signIn.css';
import { useFormik } from 'formik';
import { loginSchema } from '../../schemas/loginSchema';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton'
function SignIn () {
    const initialState = {
        email: '',
        password: '',
    }
    const formik = useFormik({
        initialValues: initialState,
        validationSchema: loginSchema,
        // onSubmit: async function (values, action) {
        //     // console.log("Value:", value);
        //     if (value == 1) {
        //         await loginAdminHandler(values)
        //     } else if (value == 2) {
        //         await loginUserHandler(values)
        //     }
        //     action.resetForm()
        // },
    })
    return (
        <>
        <div className="signin_main_contain">
            <div className="signin_container">
                <form>
                    <div className="text-center title_box">
                        <span className="pre_title"></span>
                        <h1 className="title">EMS</h1>
                    </div>
                    <h4 className="text-center">SIGN IN</h4>
                    <p className="text-center text-secondary">
                        Enter your credentials to access your account
                    </p>
                    <div className="mb-4 d-flex  justify-content-center align-items-center border-none">
                         <ToggleButtonGroup
                            type="radio"
                            name="options"
                            className="border-0" 
                        > 
                            <ToggleButton
                                id="tbg-btn-1"
                                value={1}
                                // className={`toggle-button ${
                                //     value === 1 ? 'active' : ''
                                // }`}
                                // onClick={() => setActiveValue(3)}
                            >
                                Admin Login
                            </ToggleButton>
                            <ToggleButton
                                id="tbg-btn-2"
                                value={2}
                                // className={`toggle-button ${
                                //     value === 2 ? 'active' : ''
                                // }`}
                                // onClick={() => setActiveValue(4)}
                            >
                                User Login
                            </ToggleButton>
                         </ToggleButtonGroup>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="mb-2 signin_input_label">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formik.values.email}
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            className="form-control"
                        />
                        {formik.errors.email && formik.touched.email ? (
                            <p className="form_error">{formik.errors.email}</p>
                        ) : null}
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="password"
                            className="mb-2 signin_input_label"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            className="form-control border border-danger"
                            // }`}
                        />
                        {formik.errors.password && formik.touched.password ? (
                            <p className="form_error">
                                {formik.errors.password}
                            </p>
                        ) : null}
                    </div>
                    <button className=" signin mb-3">SIGN IN</button>
                    <div className="text-center">
                        {' '}
                        <span>Forgot your password? </span>
                        <a href="" className="anchor">
                            Reset Password
                        </a>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default SignIn;
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import back from '../../Assets/images/back.png'
import toast, { Toaster } from 'react-hot-toast';
import Axios from 'axios';
import ForgetPass from '../../Components/ForgetPass/ForgetPass';
import ResetPass from '../../Components/ResetPass/ResetPass';
import login from '../../Assets/images/Mask Group 2.png'
import logoLogin from '../../Assets/images/logoLogin.png'
import './index.css';

function Login() {
    const intialValues = { email: "", password: "", user_type: "" };
    const [formValues, setFormValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showLogin, setShowLogin] = useState(true);
    const [forgetPass, setForgetPass] = useState(false);
    const [resetpass, setResetPass] = useState(false);

    const ShowLogin = () => {
        setShowLogin(false)
        setForgetPass(true)
    }
    const ResetPassword = () => {
        setShowLogin(false);
        setForgetPass(false);
        setResetPass(true)
    }

    const submitForm = () => {
        console.log(formValues);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmitting(true);
        Axios.get(`http://localhost:8000/api/users/user-info?${`input=${formValues.email}`}&${`password=${formValues.password}`}&${`user_type=${formValues.user_type}`}`)
            .then((res) => {
                let data = res.data;
                if (typeof data === "string") {
                    toast.error(res.data)
                } else {
                    toast.success("Successed")
                    localStorage.setItem('user-info', JSON.stringify(data));
                }
            })
            .catch((err) => {
                console.error(err)
            })
    }
    const validate = (values) => {
        let errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "Please enter email";
        } else if (!regex.test(values.email)) {
            errors.email = "Invalid email format";
        }
        if (!values.password) {
            errors.password = "Please enter password";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        }
        if (!values.user_type) {
            errors.user_type = "Please enter account";
        }
        return errors;
    };

    return (
        <div className='login'>
            <Link to="/" className='back'>
                <span>Back</span>
                <img src={back} alt="" />
            </Link>
            <div className="login_">
                {
                    showLogin && (
                        <div>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <img src={logoLogin} alt="" style={{ width: "225px" }} />
                            </div>
                            <div>
                                {/* {Object.keys(formErrors).length === 0 && isSubmitting && (
                alert("successed")
            )} */}
                                <div><Toaster /></div>
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className='bar'>
                                        <div className='select'>
                                            <label>select your type account</label><br />
                                            <select name='user_type' value={formValues.user_type} onChange={handleChange}>
                                                <option value="">...</option>
                                                <option value="companies">Corporate</option>
                                                <option value="institutes">Institute</option>
                                                <option value="scientific_careers">Scientific Profissional</option>
                                                <option value="craftsmen">Handicraft</option>
                                                <option value="individuals">Individuals</option>
                                            </select>
                                            {formErrors.user_type && (
                                                <span className="error" style={{ color: "red" }}>{formErrors.user_type}</span>
                                            )}
                                        </div>
                                        <div className='email'>
                                            <label htmlFor="email" >mobile number or email</label><br />
                                            <input
                                                type="email"
                                                name='email'
                                                id="email"
                                                value={formValues.email}
                                                onChange={handleChange}
                                                className={formErrors.email && "input-error"}
                                            />
                                            {formErrors.email && (
                                                <span className="error" style={{ color: "red" }}>{formErrors.email}</span>
                                            )}
                                        </div>
                                        <div className='password'>
                                            <label htmlFor="password_">password</label><br />
                                            <input
                                                type="password"
                                                id="password"
                                                name='password'
                                                value={formValues.password}
                                                onChange={handleChange}
                                                className={formErrors.password && "input-error"}
                                            />
                                            {formErrors.password && (
                                                <span className="error" style={{ color: "red" }}>{formErrors.password}</span>
                                            )}
                                        </div>
                                    </div>
                                    <Link className='forget' onClick={ShowLogin}>forget password</Link>
                                    <button type='submit' className='loginButton mt-2'>login</button><br />
                                </form>
                                <div className='register mt-2'>
                                    <p className='my-0'>don't have an account?</p>
                                    <Link to="/register">
                                        <button>Register</button>
                                    </Link>
                                </div>
                            </div>
                        </div>)}
                {
                    forgetPass && (
                        <div>
                            <ForgetPass ResetPassword={ResetPassword} />
                        </div>
                    )
                }{
                    resetpass && (
                        <div>
                            <ResetPass />
                        </div>
                    )
                }
            </div>
            <div className="section2">
                <img src={login} alt="" />
            </div>
        </div>
    )
}

export default Login

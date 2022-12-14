import React , {useState} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import back from '../../Assets/images/back.png'
import toast  ,{Toaster} from 'react-hot-toast';
import Axios from 'axios';
import login from '../../Assets/images/ar_photo/login.png'
import logoLogin from '../../Assets/images/logoLogin.png'
import './index.css'

function Login_ar() {
    const intialValues = { email: "", password: "" , user_type:""};
    const [formValues, setFormValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();
    const handleChange = (e)=> {
        const{name , value} = e.target;
        setFormValues({...formValues , [name]:value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        Axios.get(
            `http://localhost:8000/api/users/user-info?${`input=${formValues.email}`}&${`password=${formValues.password}`}&${`user_type=${formValues.user_type}`}`
        )
        .then((res) => {
            let data = res.data;
            if (typeof data === "string") {
                toast.error(res.data);
            } else {
                switch (formValues.user_type) {
                    case "companies":
                        setTimeout(() => {
                            navigate("/corporate-ar")
                        }, 3000);
                        break;
                    case "institute":
                        setTimeout(() => {
                            navigate("/institute-ar")
                        }, 3000);
                        break;
                    case "scientific_careers":
                        setTimeout(() => {
                            navigate("/scientific-ar")
                            }, 3000);
                        break;
                    case "craftsmen":
                        setTimeout(() => {
                            navigate("/handicraft-ar")
                        }, 3000);
                        break;
                    case "individuals":
                        setTimeout(() => {
                            navigate("/individuals-ar")
                        }, 3000);
                        break;
                    default:
                        break;
                }
                toast.success("...???? ?????????? ???????????? ??????????");
                localStorage.setItem("users", JSON.stringify(data));
            }
        }).catch((err) => {
            console.error(err);
        });
    };
    const validate = (values) => {
        let errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "???????????? ?????????? ???????????? ????????????????????";
        } else if (!regex.test(values.email) && typeof values.email === Number ) {
            errors.email = "?????????? ???????? ???????????????? ?????? ????????";
        }
        if (!values.password) {
        errors.password = "???????????? ?????????? ???????? ????????????";
        } else if (values.password.length < 4) {
            errors.password = "?????? ???? ???????? ???????? ???????????? ???????? ???? 4 ????????";
        }
        if(!values.user_type){
            errors.user_type = "???????????? ?????????? ?????? ???????????? ?????????? ????";
        }
        return errors;
    };
    
    return (
    <div className='login'>
        <Link to="/ar" className='back_ar'>
            <img src={back} alt=""/>
            <span>????????</span>
        </Link>
        <div className="login_ar">
        <div>
            <div style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
                <img src={logoLogin} alt=""/>
            </div>
            <div>
                <div><Toaster/></div>
                <form onSubmit={handleSubmit} noValidate>
                <div className='bar'>
                    <div className='select mt-2'>
                        <label>???????? ?????? ????????????</label><br/>
                        <select name='user_type' value={formValues.user_type} onChange={handleChange}>
                        <option value="" hidden> ?????? ????????????</option>
                        <option value="companies">????????</option>
                        <option value="institute">??????????</option>
                        <option value="scientific_careers">?????? ??????????</option>
                        <option value="craftsmen">????????????</option>
                        <option value="individuals">??????????</option>
                        </select>
                    {formErrors.user_type && (
                        <span className="error_ar" style={{color:"red"}}>{formErrors.user_type}</span>
                        )}
                    </div>
                    <div className='email mt-2'>
                        <label htmlFor="email" >?????? ???????????????? ???? ??????????????</label><br/>
                        <input 
                        type="text" 
                        name='email' 
                        id="email" 
                        value={formValues.email}
                        onChange={handleChange}
                        className={formErrors.email && "input-error"}
                        />
                        {formErrors.email && (
                        <span className="error_ar" style={{color:"red"}}>{formErrors.email}</span>
                        )}
                    </div>
                    <div className='password mt-2'>
                        <label htmlFor="password_">???????? ????????????</label><br/>
                        <input 
                        type="password" 
                        id="password" 
                        name='password'
                        value={formValues.password}
                        onChange={handleChange}
                        className={formErrors.password && "input-error"}
                        />
                        {formErrors.password && (
                        <span className="error_ar" style={{color:"red"}}>{formErrors.password}</span>
                        )}
                    </div>
                    </div>
                    <Link className='forget' to="/forget-password-ar">???????? ???????? ????????????</Link>
                    <button type='submit' className='loginButton mt-2'>?????????? ????????????</button><br/>
                </form>
                <div className='register mt-3'>
                    <p className='my-0'>???? ???????? ??????????</p>
                    <Link to="/register-ar">
                        <button>??????????????</button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
        <div className="section2_ar">
            <img src={login} alt=""/>
        </div>
    </div>
)
}

export default Login_ar
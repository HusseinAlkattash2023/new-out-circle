import React , {useState} from 'react'
import { Link } from 'react-router-dom'
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

    const handleChange = (e)=> {
        const{name , value} = e.target;
        setFormValues({...formValues , [name]:value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues))
        Axios.get(`http://localhost:8000/users?${`email=${formValues.email}`}&${`password=${formValues.password}`}&${`user_type=${formValues.user_type}`}`)
        .then((res)=>{
            console.log(res)
            if(res.data === "Error !!!" || res.data === "عذراً الإيميل الذي ادخلته غير موجود ، رجاءً أدخل إيميل آخر من فضلك ..." || res.data === "كلمة السر التي أدخلتها غير صحيحة ، من فضلك أعد إدخال كلمة السر بشكل صحيح .."){
                toast.error(res.data)
            }else{
                toast.success("Successed") 
                localStorage.setItem('items', JSON.stringify({ ...formValues }));
            }
        })
        .catch((err)=>{
            console.error(err)
        })
    }
    const validate = (values) => {
        let errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "الرجاء إدخال البريد الإلكتروني";
        } else if (!regex.test(values.email) && typeof values.email === Number ) {
            errors.email = "تنسيق بريد إلكتروني غير صالح";
        }
        if (!values.password) {
        errors.password = "الرجاء إدخال كلمة المرور";
        } else if (values.password.length < 4) {
            errors.password = "يجب أن تكون كلمة المرور أكثر من 4 أحرف";
        }
        if(!values.user_type){
            errors.user_type = "الرجاء إدخال نوع الحساب الخاص بك";
        }
        return errors;
    };
    
    return (
    <div className='login'>
        <Link to="/ar" className='back_ar'>
            <img src={back} alt=""/>
            <span>رجوع</span>
        </Link>
        <div className="login_ar">
        <div>
            <div style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
                <img src={logoLogin} alt="" style={{width:"225px"}}/>
            </div>
            <div>
                <div><Toaster/></div>
                <form onSubmit={handleSubmit} noValidate>
                <div className='bar'>
                    <div className='select mt-3'>
                        <label>اختر نوع الحساب</label><br/>
                        <select name='user_type' value={formValues.user_type} onChange={handleChange}>
                        <option value="">...</option>
                        <option value="companies">Corporate</option>
                        <option value="institutes">Institute</option>
                        <option value="scientific_careers">Scientific Profissional</option>
                        <option value="craftsmen">Handicraft</option>
                        <option value="individuals">Individuals</option>
                        </select>
                    {formErrors.user_type && (
                        <span className="error_ar" style={{color:"red"}}>{formErrors.user_type}</span>
                        )}
                    </div>
                    <div className='email mt-3'>
                        <label htmlFor="email" >رقم الموبايل أو الإيميل</label><br/>
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
                    <div className='password mt-3'>
                        <label htmlFor="password_">كلمة المرور</label><br/>
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
                    <Link className='forget' to="/forget-password">نسيت كلمة المرور</Link>
                    <button type='submit' className='loginButton mt-3'>تسجيل الدخول</button><br/>
                </form>
                <div className='register mt-3'>
                    <p className='my-0'>هل لديك حساب؟</p>
                    <Link to="/register-ar">
                        <button>التسجيل</button>
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
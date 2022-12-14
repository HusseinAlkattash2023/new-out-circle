import React ,{useState}from 'react'
import { useForm } from "react-hook-form";
import imagepass from "../../Assets/images/password.svg"
import { yupResolver } from '@hookform/resolvers/yup';
import { Link , useNavigate} from 'react-router-dom'
import * as yup from "yup";
import './index.css';
import Axios from 'axios';
import image from '../../Assets/images/ar_photo/login.png'
import toast, { Toaster } from "react-hot-toast";

const schema = yup.object({
  code: yup.string().required("Please Enter code"),
  password: yup.string().min(4).required('Password is required'),
  passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
}).required();

const ResetPass = () => {
  const navigate = useNavigate();
  const [password , setPassword] = useState("");
  const [code_ , setCode_] = useState("");
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const code = localStorage.getItem("code");
  const user = localStorage.getItem("user_id");
  const account = localStorage.getItem("account_type");
  
  const onSubmit = ()=>{
    if(code_ === code){
      Axios.put(`http://localhost:8000/api/users/reset-password/${user}?account_type=${account}&new_password=${password}`)
      .then((res)=>{
        toast.success("...تم تغيير كلمة المرور الخاصة بك بنجاح")
        setTimeout(() => {
          navigate("/login-ar");
        }, 3000);
      })
      .catch((err)=>{
        console.error(err)
      })
    }else{
      toast.error("!الكود الذي أدخلته غير صحيح")
    }
    }
  return (
    <div className='reset'>
      <div><Toaster/></div>
    <div className='body_ar'>
        <header>
            <img src={imagepass} alt=""/>
            <h2>إعادة تعيين كلمة المرور</h2>
        </header>
        <form onSubmit={handleSubmit(onSubmit)} className="my-2">
          <div className='pass_ar'>
            <label>ادخل الكود</label>
            <input type="text" {...register("code")} value={code_} onChange={(e)=> setCode_(e.target.value)}/>
            <span style={{color:"red"}}>{errors.code?.message}</span>
          </div>
          <div className='pass_ar'>
            <label>كلمة المرور الجديدة</label>
            <input type="password" {...register("password")} value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <span style={{color:"red"}}>{errors.password?.message}</span>
          </div>
          <div className="pass_ar">
            <label>تأكيد كلمة المرور</label>
            <input type="password" {...register("passwordConfirmation")} />
            <span style={{color:"red"}}>{errors.passwordConfirmation?.message}</span>
          </div>
          <button type='submit' className='submit'>إرسال</button>
        </form>
    </div>
    <div className="image_ar">
      <img src={image} alt=""/>
    </div>
    </div>
  )
}

export default ResetPass

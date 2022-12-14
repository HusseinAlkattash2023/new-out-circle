import React , {useRef, useState} from 'react'
import './index.css';
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import back from '../../Assets/images/back.png';
import {BsPersonPlus} from 'react-icons/bs';
import {Link , useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import file from '../../Assets/images/file.png';
import image from '../../Assets/images/ar_photo/scientific.png';
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";

const schema = yup.object({
    username:yup.string().required('Please Enter your username'),
    email: yup.string().email().required('Please Enter your Email'),
    password:yup.string().required("Please enter a password")
    .min(8, "Password too short"),
    confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match")
}).required()

function RegisterScientific() {
    const [data , setData] = useState({
        username:"",
        password:"",
        comfirm_password:"",
        email:"",
        full_name:"",
        born_date:"",
        current_city:"",
        current_address:"",
        scientific_certificate:"",
        start_date:"",
        whatsapp_number:"",
        phone_number:""
    })
    const [ num , setNum ] = useState("")
    const [ file1 , setFile1 ] = useState(null)
    const ref1 = useRef();
    const ref2 = useRef();
    const navigate = useNavigate();
    const data_ = [
        {
            key:"user_name",
            value:data.username
        },{
            key:"email",
            value:data.email
        },{
            key:"password",
            value:data.password
        },{
            key:"confirm_password",
            value:data.confirm_password
        },{
            key:"birthday",
            value:data.born_date
        },{
            key:"full_name",
            value:data.full_name
        },{
            key:"city",
            value:data.current_city
        },{
            key:"current_address",
            value:data.current_address
        },{
            key:"craftsmanship",
            value:data.scientific_certificate
        },{
            key:"landline_number",
            value:data.phone_number,
        },{
            key:"phone_number",
            value:num
        },{
            key:"whatsapp_number",
            value:data.whatsapp_number
        },{
            key:"work_start_date",
            value:data.start_date
        },{
            key:"file1",
            value:file1
        }
    ]

    const { register, handleSubmit , formState:{errors}} = useForm(
        {resolver: yupResolver(schema)});
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        data_.map((item)=>(
        formData.append(item.key , item.value)
        ))
        console.log("Hello")
    //     axios.post("http://localhost:8000/api/scientific-careers/add-new-user", formData)
    //     .then((res) => {
    //         const data1 = res.data;
    //         if(typeof(data1) === "string"){
    //             toast.error(data1)
    //         }else{
    //             toast.success("...???? ?????????? ?????????? ??????????")
    //             localStorage.setItem("users", JSON.stringify({ ...data1 }));
    //             setTimeout(() => navigate("/scientific-ar") , 2000);
    //         }
    // })
    // .catch((err) => {
    //     console.error(err);
    // });
    }
    
    return (
        <div className="scientific">
            <header>
            <Link to="/register-ar" className="back_ar">
                <span>????????</span>
                <img src={back} alt=""/>
            </Link>
        </header>
        <section className='register3_ar'>
            <header>
                <span className='icon'><BsPersonPlus/></span>
                <span className='text'>???????????? ???????? / ?????? ??????????</span>
            </header>
            <div><Toaster /></div>
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <div className='bar'>
                <div>
                </div>
                <div className='my-2 input_'>
                    <input 
                    {...register("username")} 
                    value={data.username}
                    onChange={(e)=>{setData({...data , username:e.target.value})}}
                    placeholder="?????? ????????????????" 
                    className='input' 
                    type="text"/>
                    <p style={{color:"red"}}>{errors.username?.message}</p>
                </div>
                <div className='my-2 input_'>
                    <input  
                    value={data.password}
                    onChange={(e)=>{setData({...data , password:e.target.value})}}
                    placeholder="???????? ????????????" 
                    className='input' 
                    type="password"/>
                    {/* <p style={{color:"red"}}>{errors.password?.message}</p> */}
                </div>
                <div className='my-2 input_'>
                    <input 
                    value={data.comfirm_password}
                    onChange={(e)=>{setData({...data , comfirm_password:e.target.value})}}
                    placeholder="?????????? ???????? ????????????" 
                    className='input' 
                    type="password"/>
                    {/* <p style={{color:"red"}}>{errors.confirmPassword?.message}</p> */}
                </div>
                <div className='my-2 input_'>
                    <input  
                    value={data.full_name}
                    onChange={(e)=>{setData({...data , full_name:e.target.value})}}
                    placeholder="?????????? ????????????" 
                    className='input' 
                    type="text"/>
                    {/* <p style={{color:"red"}}>{errors.confirmPasswod?.message}</p> */}
                </div>
                <div className='my-3 input_'>
                    <input 
                    value={data.born_date}
                    onChange={(e)=>{setData({...data , born_date:e.target.value})}}
                    ref={ref1}
                    type="text" 
                    placeholder="????????????????" 
                    style={{width:"400px"}}
                    onFocus={() => (ref1.current.type = "date")}
                    onBlur={() => (ref1.current.type = "text")}
                    className="input"
                    />
                </div>
                <div className='my-2 input_'>
                    <input 
                    value={data.current_city}
                    onChange={(e)=>{setData({...data , current_city:e.target.value})}}
                    className='input'  
                    placeholder="????????????????" 
                    type="text"/>
                    {/* <p style={{color:"red"}}>{errors.username?.message}</p> */}
                </div>
                <div className='my-2 input_'>
                    <input 
                    value={data.current_address}
                    onChange={(e)=>{setData({...data , current_address:e.target.value})}}
                    className='input'  
                    placeholder="?????????????? ????????????" 
                    type="text"/>
                    {/* <p style={{color:"red"}}>{errors.username?.message}</p> */}
                </div>
                <div className='my-2 input_'>
                    <textarea 
                    style={{resize: "none"}}
                    value={data.scientific_certificate}
                    onChange={(e)=>{setData({...data , scientific_certificate:e.target.value})}}
                    className='input' 
                    placeholder="???????????????? ????????????" 
                    type="text"></textarea>
                    {/* <p style={{color:"red"}}>{errors.username?.message}</p> */}
                </div>
                <div className='my-2 input_'>
                    <input 
                    value={data.start_date}
                    onChange={(e)=>{setData({...data , start_date:e.target.value})}}
                    className='input'
                    ref={ref2}
                    onFocus={() => (ref2.current.type = "date")}
                    onBlur={() => (ref2.current.type = "text")}
                    placeholder="?????????? ?????? ?????????? ????????????" 
                    type="text"/>
                    {/* <p style={{color:"red"}}>{errors.username?.message}</p> */}
                </div>
                <div className='my-2 input_'>
                <input 
                value={data.phone_number}
                onChange={(e) => {setData({...data , phone_number:e.target.value})}}
                className="input"  
                placeholder="???????????? ????????????" 
                type="number"/>
                </div>
                <div className='my-2 input_'>
                    <ReactPhoneInput value={num} onChange={setNum} className="phone_number" placeholder='?????? ????????????????' defaultCountry="sy" enableSearchField />
                </div>
                <div className='my-2 input_'>
                <input 
                value={data.whatsapp_number}
                onChange={(e) => {setData({...data , whatsapp_number:e.target.value})}}
                className="input"  
                placeholder="?????? ???????????? ????" 
                type="number"/>
                </div>
                <div className='my-2 input_'>
                    <input 
                    value={data.email}
                    onChange={(e) => {setData({...data , email:e.target.value})}}
                    className='input'  
                    placeholder="???????????? ????????????????????" 
                    type="email"/>
                    {/* <p style={{color:"red"}}>{errors.email?.message}</p> */}
                </div>
                <div className='my-3 input_1'>
                    <label htmlFor="file2">
                        <p>?????????? ???????? ?????????? ????????????????</p>
                        <img src={file} alt="" width="30"/>
                    </label>
                    <input 
                    onChange={(e) => setFile1(e.target.files[0])} 
                    className='input text-light' 
                    name='uploadFile' 
                    id="file2" 
                    type="file"
                    />                     
                </div>
                </div>
                <button className='mx-3 submit' type='submit'>??????????</button>
            </form>
        </section>
        <div className="background1-ar">
            <img src={image} alt=""/>
        </div>
        </div>
)
}

export default RegisterScientific;
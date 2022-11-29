import React , {useRef, useState} from 'react'
import './index.css'
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import back from '../../Assets/images/back.png'
import {BsPersonPlus} from 'react-icons/bs'
import {Link , useNavigate} from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import file from '../../Assets/images/file.png'
import image from '../../Assets/images/Mask Group -3.png';
import axios from 'axios'
// const schema = yup.object({
//     username:yup.string().required('Please Enter your username'),
//     email: yup.string().email().required('Please Enter your Email'),
//     password:yup.string().required("Please enter a password")
//     .min(4, "Password too short"),
//     confirm_password: yup
//     .string()
//     .required()
//     .oneOf([yup.ref("password"), null], "Passwords must match")
// }).required()

function RegisterHandicraft() {
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
        craft_specialization:"",
        start_date:"",
        work_address:"",
        whatsapp_number:"",
        landline_number:""
    })
    const [num1, setNum1] = useState("");
    const [file1, setFile1] = useState();
    const [file2, setFile2] = useState();
    const ref1 = useRef();
    const ref2 = useRef();
    const navigate = useNavigate()
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
            key:"scientific_certificate",
            value:data.scientific_certificate
        },{
            key:"craftsmanship",
            value:data.craft_specialization
        },{
            key:"landline_number",
            value:data.landline_number,
        },{
            key:"phone_number",
            value:num1
        },{
            key:"whatsapp_number",
            value:data.whatsapp_number
        },{
            key:"work_address",
            value:data.work_address
        },{
            key:"work_start_date",
            value:data.start_date
        },{
            key:"file1",
            value:file1
        },{
            key:"file2",
            value:file2
        },
    ]

    // const { register, handleSubmit , formState:{errors}} = useForm(
    //     {resolver: yupResolver()});
    const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    data_.map((item)=>(
        formData.append(item.key , item.value)
    ))
    axios.post("http://localhost:8000/api/craftsmen/add-new-user", formData)
        .then((res) => {
        console.log(data);
        localStorage.setItem("users", JSON.stringify({ ...data }));
        navigate("/handicraft")
    })
    .catch((err) => {
        console.error(err);
    });
    }
    

    return (
        <div className="scientific">
            <header>
            <Link to="/register">
                <span>Back</span>
                <img src={back} alt=""/>
            </Link>
        </header>
        <section className='register3'>
            <header>
                <span className='icon'><BsPersonPlus/></span>
                <span className='text'>New User / Handicraft</span>
            </header>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className='bar'>
                <div>
                </div>
                <div className='my-2 input_'>
                <input 
                value={data.username}
                onChange={(e) => {
                setData({ ...data, username: e.target.value });
                }}
                placeholder="User name" 
                className='input' 
                type="text"/>
                {/* <p style={{color:"red"}}>{errors.username?.message}</p> */}
                </div>
                <div className='my-2 input_'>
                    <input 
                    value={data.password}
                    onChange={(e)=>{
                        setData({...data, password:e.target.value})
                    }}
                    placeholder="Password" 
                    className='input' 
                    type="password"/>
                    {/* <p style={{color:"red"}}>{errors.password?.message}</p> */}
                </div>
                <div className='my-2 input_'>
                    <input 
                    value={data.comfirm_password}
                    onChange={(e)=>{
                        setData({...data , comfirm_password:e.target.value})
                    }} 
                    placeholder="Confirm Password" 
                    className='input' 
                    type="password"/>
                    {/* <p style={{color:"red"}}>{errors.confirmPassword?.message}</p> */}
                </div>
                <div className='my-2 input_'>
                    <input 
                    value={data.full_name}
                    onChange={(e)=>{
                        setData({...data , full_name:e.target.value})
                    }}  
                    placeholder="Full Name" 
                    className='input' 
                    type="text"/>
                    {/* <p style={{color:"red"}}>{errors.confirm_passwod?.message}</p> */}
                </div>
                <div className='my-3 input_'>
                    <input 
                    ref={ref1}
                    value={data.born_date}
                    onChange={(e)=>{
                        setData({...data , born_date:e.target.value})
                    }}
                    type="text" 
                    placeholder="Born date" 
                    style={{width:"400px"}}
                    onFocus={() => (ref1.current.type = "date")}
                    onBlur={() => (ref1.current.type = "text")}
                    className="input"
                    />
                </div>
                <div className='my-2 input_'>
                    <input 
                    value={data.current_city}
                    onChange={(e)=>{
                        setData({...data , current_city:e.target.value})
                    }}
                    className='input' 
                    placeholder="Current city" 
                    type="text"/>
                    {/* <p style={{color:"red"}}>{errors.username?.message}</p> */}
                </div>
                <div className='my-2 input_'>
                    <input 
                    value={data.current_address}
                    onChange={(e)=>{
                        setData({...data , current_address:e.target.value})
                    }}
                    className='input' 
                    placeholder="Current Address" 
                    type="text"/>
                    {/* <p style={{color:"red"}}>{errors.username?.message}</p> */}
                </div>
                <div className='my-2 input_'>
                    <textarea 
                    value={data.scientific_certificate}
                    onChange={(e)=>{
                        setData({...data , scientific_certificate:e.target.value})
                    }}
                    className='input' 
                    placeholder="Scientific certificate" 
                    type="text"
                    ></textarea>
                    {/* <p style={{color:"red"}}>{errors.username?.message}</p> */}
                </div>
                <div className='my-2 input_'>
                    <textarea
                    value={data.craft_specialization}
                    onChange={(e)=>{
                        setData({...data , craft_specialization:e.target.value})
                    }}
                    className='input' 
                    placeholder="Craft specialization" 
                    type="text"></textarea>
                    {/* <p style={{color:"red"}}>{errors.username?.message}</p> */}
                </div>
                <div className='my-2 input_'>
                    <input 
                    value={data.start_date}
                    onChange={(e)=>{
                        setData({...data ,  start_date:e.target.value})
                    }}
                    className='input'
                    ref={ref2}
                    onFocus={() => (ref2.current.type = "date")}
                    onBlur={() => (ref2.current.type = "text")}
                    placeholder="Actaul start date" 
                    type="text"/>
                    {/* <p style={{color:"red"}}>{errors.username?.message}</p> */}
                </div>
                <div className='my-2 input_'>
                    <input 
                    value={data.current_work}
                    onChange={(e)=>{
                        setData({...data , current_work:e.target.value})
                    }}
                    className='input' 
                    placeholder="Current work address" 
                    type="text"/>
                    {/* <p style={{color:"red"}}>{errors.username?.message}</p> */}
                </div>
                <div className='my-2 input_'>
                <input 
                value={data.landline_number}
                onChange={(e)=>{
                    setData({...data , landline_number:e.target.value})
                }}
                className="input"  
                placeholder="Landline number" 
                type="number"/>
                </div>
                <div className='my-2 input_'>
                    <ReactPhoneInput  
                    value={num1}
                    onChange={setNum1}
                    className="phone_number" 
                    placeholder='Mobile number' 
                    defaultCountry="sy" enableSearchField />
                </div>
                <div className='my-2 input_'>
                <input 
                value={data.whatsapp_number}
                onChange={(e)=>{
                    setData({...data , whatsapp_number:e.target.value})
                }}
                className="input"  
                placeholder="Whatsapp number" 
                type="number"/>
                </div>
                <div className='my-2 input_'>
                    <input 
                    value={data.email}
                    onChange={(e)=>{
                        setData({...data , email:e.target.value})
                    }}
                    className='input' 
                    placeholder="Email Address" 
                    type="email"/>
                    {/* <p style={{color:"red"}}>{errors.email?.message}</p> */}
                </div>
                <div className='my-3 input_1'>
                    <label htmlFor="file2">
                        <p>Upload work licens</p>
                        <img src={file} alt="" width="30"/>
                    </label>
                    <input 
                    onChange={(e) => setFile1(e.target.files[0])}
                    className='input text-light' 
                    name='uploadFile' 
                    id="file2" 
                    placeholder="Upload file" 
                    type="file"/>                     
                </div>
                <div className='my-3 input_1'>
                    <label htmlFor="file2">
                        <p>Upload work samples in in the field of craft</p>
                        <img src={file} alt="" width="30"/>
                    </label>
                    <input
                    onChange={(e) => setFile2(e.target.files[0])} 
                    className='input text-light' 
                    name='uploadFile' 
                    id="file2" 
                    placeholder="Upload file" 
                    type="file"/>                     
                </div>
                </div>
                <button className='mx-3 submit' type='submit'>Register</button>
            </form>
        </section>
        <div className="background2">
            <img src={image} alt=""/>
        </div>
    </div>
)
}

export default RegisterHandicraft;
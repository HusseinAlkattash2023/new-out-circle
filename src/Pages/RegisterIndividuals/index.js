import React, { useState , useRef , useEffect} from 'react'
import './RegisterIndividuals.css'
import {Link , useNavigate} from 'react-router-dom'
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import back from '../../images/back.png'
import {BsPersonPlus} from 'react-icons/bs'
import FormInput from '../../component/Input/FormInput'
import Header from '../../component/header/Header'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios'
import individuals from '../../images/Mask Group -5.png'
import file from '../../images/file.png'


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

function RegisterIndividuals({individual_ , setIndividual_}) {
    const navigate = useNavigate()
    // const ChangeTo = ()=>{
    //     navigate("/individuals")
    //     setIndividual_(false)
    // }
    const [data , setData]= useState({
        username:"",
        password:"",
        confirmPasswod:"",
        born_date:"",
        full_name:"",
        current_city:"",
        current_address:"",
        scientific_sertificate:"",
        mobile_number:"",
        phone_number:"",
        email:"",
        current_work:"",
        academic_certificate:"",
        work_address:"",
        work_date:"",
        work_number:"",
        extention:"",
        experience:"",
        skills:"",
        it_skills:"",
        upload_file1:null,
        upload_file2:null
    })
    const [num1 , setNum1] = useState("");
    const [file1, setFile1] = useState();
    const [file2, setFile2] = useState();
    // const { register, handleSubmit , formState:{errors}} = useForm(
    //     {resolver: yupResolver(schema)});
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/individuals" , {
            user_name:data.user_name,
            password:data.password,
            confirm_password:data.confirm_password,
            full_name:data.full_name,
            born_date:data.born_date,
            current_city:data.current_city,
            current_address:data.current_address,
            scientific_sertificate:data.scientific_sertificate,
            mobile_number:num1,
            phone_number:data.phone_number,
            email:data.email,
            current_work:data.current_work,
            academic_certificate:data.academic_certificate,
            work_address:data.work_address,
            work_date:data.work_date,
            work_number:data.whats_number,
            extention:data.extention,
            experience:data.experience,
            skills:data.skills,
            it_skills:data.it_skills
        })
        .then((res)=>{
            console.log(res)
            localStorage.setItem('items', JSON.stringify({ ...data }));
        })
        .catch((err)=>{
            console.error(err)
        })
    }

    const ref1 = useRef();
    const ref2 = useRef();
    return (
        <div className='scientific'>
        <header>
        <Link to="/register">
            <span>Back</span>
            <img src={back} alt=""/>
        </Link>
        </header>
        <section className='body'>
        <header>
            <span className='icon'><BsPersonPlus/></span>
            <span className='text'>New User / Individuals</span>
        </header>
        <form onSubmit={handleSubmit}>
        <div className='bar'>
                <div className='my-3 input_'>
                    <input className='input' value={data.username} onChange={(e)=> {setData({...data , username:e.target.value})}}  placeholder="User name" type="text"/>
                </div>
                <div className='my-3 input_'>
                    <input className='input' value={data.password} onChange={(e)=>{setData({...data , password:e.target.value})}}  placeholder="Password" type="password"/>
                </div>
                <div className='my-3 input_'>
                <input className='input' value={data.confirmPasswod} onChange={(e)=>{setData({...data , confirmPasswod:e.target.value})}}  placeholder="Confirm password" type="password"/>
                </div>
                <div className='my-3 input_'>
                    <input className='input' value={data.full_name} onChange={(e)=>{setData({...data , full_name:e.target.value})}}   placeholder="Full Name" type="text"/>
                </div>
                <div className='my-3 input_'>
                    <input 
                    className='input'
                    ref={ref1}
                    type="text" 
                    placeholder="Born date" 
                    value={data.born_date} 
                    onChange={(e)=>{setData({...data , born_date:e.target.value})}}
                    onFocus={() => (ref1.current.type = "date")}
                    onBlur={() => (ref1.current.type = "text")}
                    />
                </div>
                <div className='my-3 input_'>
                    <input className='input' value={data.current_city} onChange={(e)=>{setData({...data , current_city:e.target.value})}}   placeholder="Current city" type="text"/>
                </div>
                <div className='my-3 input_'>
                    <input className='input' value={data.current_address} onChange={(e)=>{setData({...data , current_address:e.target.value})}}  placeholder="Current Address" type="text"/>
                </div>
                <div className='my-3 input_'>
                    <input className='input' value={data.scientific_sertificate} onChange={(e)=>{setData({...data , scientific_sertificate:e.target.value})}}  placeholder="Scientific sertificate" type="text"/>
                </div>
                <div className='my-3 input_'>
                    <input className='input' value={data.academic_certificate} onChange={(e)=>{setData({...data , academic_certificate:e.target.value})}}  placeholder="Details of the academic certificate" type="text"/>
                </div>
                <div className='my-3 input_'>
                    <ReactPhoneInput  value={num1} onChange={setNum1}  className="phone_number" placeholder='Mobile number' defaultCountry="sy" enableSearchField />
                </div>
                <div className='my-3 input_'>
                    <input className="input" value={data.phone_number} onChange={(e)=>{setData({...data , phone_number:e.target.value})}}   placeholder="Phone number" type="number"/>
                </div>
                <div className='my-3 input_'>
                    <input className='input' value={data.email} onChange={(e)=> {setData({...data , email: e.target.value})}} placeholder="Email Address" type="email"/>
                </div>
                <div className='my-3 input_'>
                    <input className='input' value={data.current_work} onChange={(e)=>{setData({...data , current_work:e.target.value})}}  placeholder="Current Work" type="text"/>
                </div>
                <div className='my-3 input_'>
                    <input className='input' value={data.work_address} onChange={(e)=>{setData({...data , work_address:e.target.value})}}  placeholder="Work Address" type="text"/>
                </div>
                <div className='my-3 input_'>
                    <input
                    className='input'
                    ref={ref2}
                    type="text" 
                    onFocus={() => (ref2.current.type = "date")}
                    onBlur={() => (ref2.current.type = "text")}
                    value={data.work_date} onChange={(e)=>{setData({...data , work_date:e.target.value})}}  placeholder="Work Start date"/>
                </div>
                <div className='my-3 input_'>
                    <input className='input' value={data.work_number} onChange={(e)=>{setData({...data , work_number:e.target.value})}}  placeholder="Work phone number" type="number"/>
                </div>
                <div className='my-3 input_'>
                    <input className='input' value={data.extention} onChange={(e)=>{setData({...data , extention:e.target.value})}}  placeholder="Extention" type="text"/>
                </div>
                <div className='my-3 input_'>
                    <input className='input' value={data.experience} onChange={(e)=>{setData({...data , experience:e.target.value})}}  placeholder="Detialed practical experience" type="text"/>
                    {/* { <p style={{color:"red"}}>{errors.experience?.message}</p> } */}
                </div>
                <div className='my-3 input_'>
                    <input className='input' value={data.skills} onChange={(e)=>{setData({...data , skills:e.target.value})}}  placeholder="Languages skills" type="text"/>
                </div>
                <div className='my-3 input_'>
                    <input className='input' value={data.it_skills} onChange={(e)=>{setData({...data , it_skills:e.target.value})}}  placeholder="IT skills" type="text"/>
                </div>
                <div className='my-3 input_1'>
                    <label htmlFor="file1">                    
                        <p>Upload last academic certificate</p>
                        <img src={file} alt="" width="30"/>
                    </label>
                    <input className='input'  id="file1"   type="file" /> 
                </div>
                <div className='my-3 input_1'>
                    <label htmlFor="file2">
                        <p>Upload Other certificate orobtained</p>
                        <img src={file} alt="" width="30"/>
                    </label>
                    <input className='input' name='uploadFile' id="file2" placeholder="Upload file" 
                    type="file"/>                     
                </div>
            </div>
            <button className='mx-3 submit' type='submit'>Register</button>
            </form>
        </section>
        <div className='background3'>
            <img src={individuals} alt=""/>
        </div>
        </div>
)
}

export default RegisterIndividuals


/*

                */
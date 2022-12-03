import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import {BsPersonPlus} from "react-icons/bs";
import back from '../../Assets/images/back.png';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './index.css';
import { Link , useNavigate } from 'react-router-dom';
import PersonalInfo from './steps/PersonalInfo';
import CompanyInfo from './steps/CompanyInfo';
import corporate from '../../Assets/images/Mask Group -1.png';
import Axios from 'axios';
import toast, { Toaster } from "react-hot-toast";

function RegisterCorporate() {
  const navigate = useNavigate();
  const [ num , setNum ] = useState("")
  const [page , setPage] = useState(0)
  const [data , setData] = useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
    bornDate:"",
    mobileNumber:"",
    fullName:"",
    whatsNumber:"",
    companyName:"",
    typeCompany:"",
    companyRecord:"",
    companyDate:"",
    currentCity:"",
    currentAddress:"",
    detaileBusiness:"",
    companyEmail:"",
    companyMobile:"",
    actualStart:"",
    phoneNumber:"",
    faxNumber:"",
    number_partners:"",
    file_record:"",
    establContract:"",
  })
  const data_ = [
    {
      key:"user_name",
      value:data.username
  },{
    key:"company_name",
    value:data.companyName
  },{
    key:"company_type",
    value:data.typeCompany
  },{
    key:"company_record_history",
    value:data.companyDate
  },{
    key:"city",
    value:data.currentCity
  },{
    key:"current_address",
    value:data.currentAddress
  },{
    key:"current_company_activity_details",
    value:data.detaileBusiness
  },{
    key:"phone_number",
    value:num
  },{
    key:"work_start_date",
    value:data.actualStart
  },{
    key:"landline_number",
    value:data.phoneNumber
  },{
    key:"fax_number",
    value:data.faxNumber
  },{
    key:"number_of_partners",
    value:data.number_partners
  },{
      key:"company_record_number",
      value:data.companyRecord
  },{
        key:"email",
        value:data.companyEmail
    },{
      key:"password",
      value:data.password
  },{
        key:"file1",
        value:data.file_record
    },{
        key:"file2",
        value:data.establContract
    },
]
  const handleSubmit= ()=>{
    const formData = new FormData();
    data_.map((item)=>(
        formData.append(item.key , item.value)
    ))
    Axios
      .post("http://localhost:8000/api/companies/add-new-user", formData)
      .then((res) => {
        const data1 = res.data;
        if(data1 === "عذراً البريد الالكتروني الذي أدخلته موجود مسبقاً ،  من فضلك أدخل بريد الكتروني آخر ..."){
            toast.error("Sorry, the email you entered already exists, please enter another email...")
        }else if( data1 === "عذراً ، توجد شركة تحمل نفس رقم السجل ، الرجاء إدخال رقم سجل آخر ..."){
          toast.error("Sorry, there is a company with the same registration number, please enter another registration number...")
        }else{
            toast.success("Your account has been created successfully")
            localStorage.setItem("users", JSON.stringify({ ...data1 }));
            localStorage.setItem("number_partners", data.number_partners);
            setTimeout(() => navigate("/add-partners") , 2000);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
  const displayPage = ()=>{
    if(page === 0){
      return <PersonalInfo page={page} setPage={setPage} data={data} setData={setData}/>
    }else if(page === 1){
      return <CompanyInfo num={num} setNum={setNum} data={data} setData={setData}/>
    }
  }
  const FormTitle = ["Personal Information" , "Company Information"]
  return(
    <div className='registerCorporate'>
        <header>
          <Link to="/register">
              <span>Back</span>
              <img src={back} alt=""/>
          </Link>
        </header>
        <div><Toaster /></div>
        <section className='register1'>
          <header>
            <span className='icon'><BsPersonPlus/></span>
            <span className='text'>New User / Corporate</span>
          </header>
          <div className='form-container'>
            <div className='header'>
              <h2>{FormTitle[page]}</h2>
            </div>
            <div className='body'>
              {displayPage()}
            </div>
            <div className='footer'>
              <button
              className='next mt-3 ms-2 py-1 px-4'
              disabled={page === 0}
              onClick={(currPage) => {
                setPage((currPage) => currPage - 1);
              }}
              >Prev</button>
              <button
              className='next mt-3 ms-2 py-1 px-4'
              onClick={(currPage) => {
                if(page === FormTitle.length-1){
                    handleSubmit();
                }else{
                  setPage((currPage) => currPage + 1)
                }
              }}
              >
                {page === FormTitle.length-1 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </section>
        <div className='background2'>
          <img src={corporate} alt=""/>
        </div>
    </div>
  )
}


export default RegisterCorporate;


/*
const [showSection1 , setShowSection1] = useState(true)
  const [showSection2 , setShowSection2] = useState(false)
  const [showSection3 , setShowSection3] = useState(false)
  const navigate = useNavigate();

  const ShowSection2 = ()=>{
    setShowSection1(false);
    setShowSection2(true)
    setShowSection3(false)
  }
  const ShowSection1 = ()=>{
    setShowSection1(true);
    setShowSection2(false)
    setShowSection3(false)
  }

  const ShowSection3 = ()=>{
    setShowSection3(true)
    setShowSection2(false)
  }

  const OnClick=() => {
    navigate("/userpage")
  }
  const { register, handleSubmit , formState:{errors}} = useForm(
    {resolver: yupResolver(schema)});
  const onSubmit = data => console.log(data);
  return (
    <div className='registerCorporate'>
        <header>
          <Link to="/register">
              <span>Back</span>
              <img src={back} alt=""/>
          </Link>
        </header>
        <section className='register1'>
          <header>
            <span className='icon'><BsPersonPlus/></span>
            <span className='text'>New User / Corporate</span>
          </header>
          <form onSubmit={handleSubmit(onSubmit)}>
          {
          showSection1 && (
            <div className='section1'>
              <span className='my-3 py-1'>Personal Infomation</span>
              <div className='mt-4'>
                <div className='my-3 input_'>
                  <input {...register("username")} placeholder="User name" type="text"/>
                  <p>{errors.username?.message}</p>
                </div>
                <div className='my-3 input_'>
                  <input {...register("password")} placeholder="Password" type="password"/>
                  <p>{errors.password?.message}</p>
                </div>
                <div className='my-3 input_'>
                  <input {...register("confirmPasswod")} placeholder="Confirm Password" type="password"/>
                  <p>{errors.confirmPasswod?.message}</p>
                </div>
                </div>
                <button className='next' onClick={ShowSection2}>Next <BsArrowRight/></button>
              </div>
              )
          }{
            showSection2 && (
              <div className='section2'>
              <div style={{height:"300px", overflowY:"scroll"}}>
                <span className='my-3 py-1'>Company Information</span>
                <div className='mt-4'>
                  <div className='my-3 input_'>
                    <input {...register("companyName")} type="text" placeholder='Company name'/>
                  </div>
                  <div className='my-3 input_'>
                    <input {...register("typeCompany")} type="text" placeholder='Type of Company'/>
                  </div>
                  <div className='my-3 input_'>
                    <input {...register("companyNumber")} type="number" placeholder='Company record number'/>
                  </div>
                   <div className='my-4 input_'>
                      <input type="date"/>
                  </div> 
                  <div className='my-3 input_'>
                    <input {...register("currentCity")} type="text" placeholder='Current city'/>
                  </div>
                  <div className='my-3 input_'>
                    <input {...register("currentaddress")} type="text" placeholder='Current address'/>
                  </div>
                </div>
                </div>
                <button className='next' onClick={ShowSection1}><BsArrowLeft/> Previous</button>
                <button className='next mx-3' onClick={ShowSection3}>Next <BsArrowRight/></button>
              </div>
            )
          }{
            showSection3 && (
              <div className='section3'>
                <span className='my-3 py-1'>Partner(1) Information</span>
                <div>
                  <div className='mt-4'>
                    <div className='my-3 input_'>
                      <input {...register("companyName")} type="text" placeholder="Partnre's full name"/>
                    </div>
                    <div className='my-3 input_'>
                      <input {...register("bornDate")} type="date" placeholder="Born date" style={{width:"400px"}}/>
                    </div>
                    <div className='my-3 input_'>
                      <input {...register("personalNumber")} type="number" placeholder="Personal mobile number"/>
                    </div>
                    <div className='my-3 input_'>
                      <input {...register("WhatsappNumber")} type="number" placeholder="Whatsapp number"/>
                    </div>
                    <div className='my-3 input_'>
                      <input {...register("landLine")} type="text" placeholder="Landline extention"/>
                    </div>
                    <button className='next' onClick={ShowSection2}><BsArrowLeft/> Previous</button>
                    <button onClick={OnClick} type='submit' className='mx-3 submit'>Submit</button>
                  </div>
                </div>
              </div>
            )
          }
          </form>
        </section>
        <div className='background2'>
        </div>
    </div>
    */
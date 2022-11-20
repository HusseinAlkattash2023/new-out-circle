import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import {BsPersonPlus} from "react-icons/bs"
import {BsArrowRight} from "react-icons/bs"
import {BsArrowLeft} from "react-icons/bs"
import back from '../../images/back.png'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './LoginAsCoporate.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import PersonalInfo from './steps/PersonalInfo';
import CompanyInfo from './steps/CompanyInfo';
import PartnerInfo from './steps/PartnerInfo';
import corporate from '../../images/Mask Group -1.png'


function LoginCorporate() {

  const [page , setPage] = useState(0)
  const [formData , setFormData] = useState({
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
  const displayPage = ()=>{
    if(page === 0){
      return <PersonalInfo page={page} setPage={setPage} formData={formData} setFormData={setFormData}/>
    }else if(page === 1){
      return <CompanyInfo formData={formData} setFormData={setFormData}/>
    }else{
      return <PartnerInfo/>
    }
  }
  const FormTitle = ["Personal Information" , "Company Information" , ""]
  return(
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
                  alert("Form Submitted")
                  console.log(formData)
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


export default LoginCorporate


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
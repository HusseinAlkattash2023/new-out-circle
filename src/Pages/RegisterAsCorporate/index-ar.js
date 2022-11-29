import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import {BsPersonPlus} from "react-icons/bs"
import back from '../../Assets/images/back.png'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './index.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import PersonalInfoAr from './steps/PersonalInfo/index-ar';
import CompanyInfoAr from './steps/CompanyInfo/index-ar';
import PartnerInfo from './steps/PartnerInfo';
import corporate from '../../Assets/images/ar_photo/corporate.png';


function RegisterCorporateAr() {

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
      return <PersonalInfoAr page={page} setPage={setPage} formData={formData} setFormData={setFormData}/>
    }else if(page === 1){
      return <CompanyInfoAr formData={formData} setFormData={setFormData}/>
    }else{
      return <PartnerInfo/>
    }
  }
  const FormTitle = ["معلومات شخصية" , "معلومات الشركة" , ""]
  return(
    <div className='registerCorporate'>
        <header>
          <Link to="/register-ar" className="back_ar">
              <span>رجوع</span>
              <img src={back} alt=""/>
          </Link>
        </header>
        <section className='register1_ar'>
          <header>
            <span className='icon'><BsPersonPlus/></span>
            <span className='text'>مستخدم جديد / شركة</span>
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
              >السابق</button>
              <button
              className='next mt-3 ms-2 py-1 px-4'
              onClick={(currPage) => {
                if(page === FormTitle.length-1){
                  alert("Form Submitted")
                  console.log(formData)
                }else{
                setPage((currPage) => currPage + 1)
                }
            }}>
                {page === FormTitle.length-1 ? "إرسال" : "التالي"}
            </button>
            </div>
        </div>
        </section>
        <div className='background2-ar'>
            <img src={corporate} alt=""/>
        </div>
    </div>
)
}


export default RegisterCorporateAr;
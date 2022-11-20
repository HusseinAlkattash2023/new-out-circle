import React , {useState} from 'react'
import './RegisterInstituse.css';
import {Link , useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import back from '../../images/back.png';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {BsPersonPlus} from "react-icons/bs"
import {BsArrowRight} from "react-icons/bs"
import {BsArrowLeft} from "react-icons/bs"
import institute from '../../images/Mask Group -2.png';
import PersonalInfo from './setps/PersonalInfo';
import InstituteInfo from './setps/InstituteInfo'

// const schema = yup.object({
//   username:yup.string().required()
// }).required()

function RegisterInstituse() {
  const [page , setPage] = useState(0)
  const navigate = useNavigate();
  const OnClick = ()=>{
    navigate("/service_institute")
  }
  // const { register, handleSubmit , formState:{errors}} = useForm(
  //   {resolver: yupResolver(schema)});
  // const onSubmit = data => console.log(data);
   
  const displayPage = ()=>{
    if(page === 0){
      return <PersonalInfo/>
    }else if(page === 1){
      return <InstituteInfo/>
    } 
  }
  const FormTitle = ["Personal Information" , "Institute Information"]
  return (
    <div className='instituse'>
        <header>
          <Link to="/register">
              <span>Back</span>
              <img src={back} alt=""/>
          </Link>
        </header>
        <section className='register2'>
          <header>
            <span className='icon'><BsPersonPlus/></span>
            <span className='text'>New User / Institute</span>
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
                  // console.log(formData)
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
          <img src={institute} alt=""/>
        </div>
    </div>
  )
}

export default RegisterInstituse

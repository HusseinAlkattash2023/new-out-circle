import React , {useState} from 'react'
import './index.css';
import {Link , useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import back from '../../Assets/images/back.png';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {BsPersonPlus} from "react-icons/bs"
import {BsArrowRight} from "react-icons/bs"
import {BsArrowLeft} from "react-icons/bs"
import institute from '../../Assets/images/ar_photo/institute.png';
import PersonalInfoAr from './steps/PersonalInfo/index-ar';
import InstituteInfoAr from './steps/InstituteInfo/index-ar';
import axios from 'axios'

// const schema = yup.object({
//   username:yup.string().required()
// }).required()

function RegisterInstituse() {
  const [page , setPage] = useState(0)
  const navigate = useNavigate();
  const[ num , setNum ] = useState("");
  const[ file1 , setFile1 ] = useState();
  const [data , setData] = useState({
    username:"",
    password:"",
    confirm_password:"",
    full_name:"",
    born_date:"",
    whatsapp_number:"",
    email:"",
    institute_name:"",
    record_history:"",
    record_number:"",
    current_city:"",
    current_address:"",
    institute_email:"",
    detailed_business:"",
    start_date:"",
    phone_number:"",
    fax_number:"",
    landline_number:""
  })
  // const { register, handleSubmit , formState:{errors}} = useForm(
  //   {resolver: yupResolver(schema)});
  // const onSubmit = data => console.log(data);
  const data_ = [
    {
      key:"user_name",
      value:data.username
    },{
      key:"password",
      value:data.password
    },{
      key:"full_name",
      value:data.full_name
    },{
      key:"birthday",
      value:data.born_date
    },{
      key:"phone_number",
      value:num,
    },{
      key:"whatsapp_number",
      value:data.whatsapp_number
    },{
      key:"user_email",
      value:data.email
    },{
      key:"institute_name",
      value:data.institute_name
    },{
      key:"institute_record_number",
      value:data.record_number
    },{
      key:"institute_record_history",
      value:data.record_history
    },{
      key:"city",
      value:data.current_city
    },{
      key:"current_address",
      value:data.current_address
    },{
      key:"current_institute_activity_details",
      value:data.detailed_business
    },{
      key:"email",
      value:data.institute_email
    },{
      key:"work_start_date",
      value:data.start_date
    },{
      key:"landline_number",
      value:data.phone_number
    },{
      key:"fax_number",
      value:data.fax_number
    },{
      key:"land_phone_extension",
      value:data.landline_number
    },{
      key:"file1",
      value:file1
    }
  ]
  const handleSubmit = () => {
    const formData = new FormData();
    data_.map((item)=>(
      formData.append(item.key , item.value)
    ))
    console.log(data)
    axios.post("http://localhost:8000/api/institutes/add-new-user", formData)
      .then((res) => {
        console.log(data);
        localStorage.setItem("users", JSON.stringify({ ...data }));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const displayPage = ()=>{
    if(page === 0){
      return <PersonalInfoAr num={num} setNum={setNum}  setData={setData} data={data}/>
    }else if(page === 1){
      return <InstituteInfoAr setFile1={setFile1} setData={setData} data={data} />
    } 
  }
  const FormTitle = ["?????????????? ??????????" , "?????????????? ??????????????"]
  return (
    <div className='instituse'>
        <header>
        <Link to="/register-ar" className="back_ar">
            <span>????????</span>
            <img src={back} alt=""/>
        </Link>
        </header>
        <section className='register2_ar'>
        <header>
            <span className='icon'><BsPersonPlus/></span>
            <span className='text'>???????????? ???????? / ??????????</span>
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
            }}>????????????</button>
            <button
            className='next mt-3 ms-2 py-1 px-4'
            onClick={(currPage) => {
                if(page === FormTitle.length-1){
                    handleSubmit()
                }else{
                    setPage((currPage) => currPage + 1)
                }
            }}>
                {page === FormTitle.length-1 ? "??????????" : "????????????"}
            </button>
            </div>
            </div>
        </section>
        <div className='background2_ar'>
            <img src={institute} alt=""/>
        </div>
    </div>
  )
}

export default RegisterInstituse;
import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import back from "../../Assets/images/back.png";
import { BsPersonPlus } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Axios from "axios";
import individuals from "../../Assets/images/Mask Group -5.png";
import file from "../../Assets/images/file.png";
import toast, { Toaster } from "react-hot-toast";

const schema = yup.object({
    user_name: yup.string().required("Please Enter your username"),
    email: yup.string().email().required("Please Enter your Email"),
    password_: yup.string().required("Please enter a password").min(4, "Password too short"),
    confirm_password_: yup.string().required("Please confirm password").oneOf([yup.ref("password_"), null], "Passwords must match"),
    full_name:yup.string().required("Please Enter your Full name"),
    // born_date:yup.string().required("Please Enter your Born date"),
    current_city:yup.string().required("Please Enter your current city"),
    current_address:yup.string().required("Please Enter your current address"),
    mobile_number:yup.number().required("Please Enter your mobile number"),
    current_work:yup.string().required("Please Enter your current work"),
    experience:yup.string().required("Please Enter your Detialed practical experience"),
    skills:yup.string().required("Please Enter your languages skills"),
    it_skills:yup.string().required("Please Enter your IT skills"),
  }).required();

function RegisterIndividuals() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
    confirm_password: "",
    born_date: "",
    full_name: "",
    current_city: "",
    current_address: "",
    scientific_sertificate: "",
    phone_number: "",
    email: "",
    current_work: "",
    academic_certificate: "",
    work_address: "",
    work_date: "",
    work_number: "",
    extention: "",
    experience: "",
    skills: "",
    it_skills: "",
  });
  const [num1, setNum1] = useState("");
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

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
      value:data.scientific_sertificate
    },{
      key:"phone_number",
      value:num1
    },{
      key:"whatsapp_number",
      value:data.phone_number
    },{
      key:"current_work",
      value:data.current_work
    },{
      key:"scientific_certificate_details",
      value:data.academic_certificate
    },{
      key:"work_address",
      value:data.work_address
    },{
      key:"work_start_date",
      value:data.work_date
    },{
      key:" business_phone_number",
      value:data.work_date
    },{
      key:"extention",
      value:data.extention
    },{
      key:"scientific_experience_details",
      value:data.experience
    },{
      key:"language_skills",
      value:data.skills
    },{
      key:"technical_skills",
      value:data.it_skills
    },{
      key:"file1",
      value:file1
    },{
      key:"file2",
      value:file2
    },
  ]
  const onSubmit =(e) => {
    e.preventDefault()
    const formData = new FormData();
    data_.map((item)=>(
      formData.append(item.key , item.value)
    ))
    Axios.post("http://localhost:8000/api/individuals/add-new-user", formData)
      .then((res) => {
        const data1 = res.data;
        if(typeof(data1) === "string"){
          toast.error("Sorry, the email you entered already exists, please enter another email...")
        }else{
          toast.success("Your account has been created successfully")
          localStorage.setItem("users", JSON.stringify({ ...data1 }));
          setTimeout(() => navigate("/individuals") , 2000);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const ref1 = useRef();
  const ref2 = useRef();
  return (
    <div className="scientific">
      <header>
        <Link to="/register">
          <span>Back</span>
          <img src={back} alt="" />
        </Link>
      </header>
      <section className="body">
        <header>
          <span className="icon">
            <BsPersonPlus />
          </span>
          <span className="text">New User / Individuals</span>
        </header>
        <div><Toaster /></div>
        <form onSubmit={onSubmit} encType="multipart/form-data">
          <div className="bar">
            <div className="my-3 input_">
              <input
                type="text"
                // {...register("user_name")}
                className="input"
                value={data.username}
                onChange={(e) => {
                  setData({ ...data, username: e.target.value });
                }}
                placeholder="User name"
              /><br/>
              {/* <span style={{color:"red"}}>{errors.user_name?.message}</span> */}
            </div>
            <div className="my-3 input_">
              <input
                // {...register("password_")}
                className="input"
                value={data.password}
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
                placeholder="Password"
                type="password"
              /><br/>
              {/* <span style={{color:"red"}}>{errors.password_?.message}</span> */}
            </div>
            <div className="my-3 input_">
              <input
                // {...register("confirm_password_")}
                className="input"
                value={data.confirm_password}
                onChange={(e) => {
                  setData({ ...data, confirm_password: e.target.value });
                }}
                placeholder="Confirm password"
                type="password"
              /><br/>
            {/* <span style={{color:"red"}}>{errors.confirm_password_?.message}</span> */}
            </div>
            <div className="my-3 input_">
              <input
                // {...register("full_name")}
                className="input"
                value={data.full_name}
                onChange={(e) => {
                  setData({ ...data, full_name: e.target.value });
                }}
                placeholder="Full Name"
                type="text"
              /><br/>
              {/* <span style={{color:"red"}}>{errors.full_name?.message}</span> */}
            </div>
            <div className="my-3 input_">
              <input
              // {...register("born_date")}
                className="input"
                ref={ref1}
                type="text"
                placeholder="Born date"
                value={data.born_date}
                onChange={(e) => {
                  setData({ ...data, born_date: e.target.value });
                }}
                onFocus={() => (ref1.current.type = "date")}
                onBlur={() => (ref1.current.type = "text")}
              /><br/>
              {/* <span style={{color:"red"}}>{errors.born_date?.message}</span> */}
            </div>
            <div className="my-3 input_">
              <input
                // {...register("current_city")}
                className="input"
                value={data.current_city}
                onChange={(e) => {
                  setData({ ...data, current_city: e.target.value });
                }}
                placeholder="Current city"
                type="text"
              /><br/>
              {/* <span style={{color:"red"}}>{errors.current_city?.message}</span> */}
            </div>
            <div className="my-3 input_">
              <input
                // {...register("current_address")}
                className="input"
                value={data.current_address}
                onChange={(e) => {
                  setData({ ...data, current_address: e.target.value });
                }}
                placeholder="Current Address"
                type="text"
              /><br/>
              {/* <span style={{color:"red"}}>{errors.current_address?.message}</span> */}
            </div>
            <div className="my-3 input_">
              <input
                // {...register("scientific_sertificate")}
                className="input"
                value={data.scientific_sertificate}
                onChange={(e) => {
                  setData({ ...data, scientific_sertificate: e.target.value });
                }}
                placeholder="Scientific sertificate"
                type="text"
              />
            </div>
            <div className="my-3 input_">
              <input
              // {...register("academic_certificate")}
                className="input"
                value={data.academic_certificate}
                onChange={(e) => {
                  setData({ ...data, academic_certificate: e.target.value });
                }}
                placeholder="Details of the academic certificate"
                type="text"
              />
            </div>
            <div className="my-3 input_">
              <ReactPhoneInput
                // {...register("mobile_number")}
                value={num1}
                onChange={setNum1}
                className="phone_number"
                placeholder="Mobile number"
                defaultCountry="sy"
                enableSearchField
              />
              {/* <span style={{color:"red"}}>{errors.mobile_number?.message}</span> */}
            </div>
            <div className="my-3 input_">
              <input
                {...register("phone_number")}
                className="input"
                value={data.phone_number}
                onChange={(e) => {
                  setData({ ...data, phone_number: e.target.value });
                }}
                placeholder="Whatsapp number"
                type="number"
              />
            </div>
            <div className="my-3 input_">
              <input
              // {...register("email")}
                className="input"
                value={data.email}
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
                placeholder="Email Address"
                type="email"
              /><br/>
              {/* <span style={{color:"red"}}>{errors.email?.message}</span> */}
            </div>
            <div className="my-3 input_">
              <input
                // {...register("current_work")}
                className="input"
                value={data.current_work}
                onChange={(e) => {
                  setData({ ...data, current_work: e.target.value });
                }}
                placeholder="Current Work"
                type="text"
              /><br/>
              {/* <span style={{color:"red"}}>{errors.current_work?.message}</span> */}
            </div>
            <div className="my-3 input_">
              <input
                // {...register("work_address")}
                className="input"
                value={data.work_address}
                onChange={(e) => {
                  setData({ ...data, work_address: e.target.value });
                }}
                placeholder="Work Address"
                type="text"
              />
            </div>
            <div className="my-3 input_">
              <input
                // {...register("work_date")}
                className="input"
                ref={ref2}
                type="text"
                onFocus={() => (ref2.current.type = "date")}
                onBlur={() => (ref2.current.type = "text")}
                value={data.work_date}
                onChange={(e) => {
                  setData({ ...data, work_date: e.target.value });
                }}
                placeholder="Work Start date"
              />
            </div>
            <div className="my-3 input_">
              <input
                // {...register("work_number")}
                className="input"
                value={data.work_number}
                onChange={(e) => {
                  setData({ ...data, work_number: e.target.value });
                }}
                placeholder="Work phone number"
                type="number"
              />
            </div>
            <div className="my-3 input_">
              <input
                // {...register("extention")}
                className="input"
                value={data.extention}
                onChange={(e) => {
                  setData({ ...data, extention: e.target.value });
                }}
                placeholder="Extention"
                type="number"
              />
            </div>
            <div className="my-3 input_">
              <input
                // {...register("experience")}
                className="input"
                value={data.experience}
                onChange={(e) => {
                  setData({ ...data, experience: e.target.value });
                }}
                placeholder="Detialed practical experience"
                type="text"
              /><br/>
              {/* <span style={{color:"red"}}>{errors.experience?.message}</span> */}
            </div>
            <div className="my-3 input_">
              <input
                // {...register("skills")}
                className="input"
                value={data.skills}
                onChange={(e) => {
                  setData({ ...data, skills: e.target.value });
                }}
                placeholder="Languages skills"
                type="text"
              /><br/>
              {/* <span style={{color:"red"}}>{errors.skills?.message}</span> */}
            </div>
            <div className="my-3 input_">
              <input
                // {...register("it_skills")}
                className="input"
                value={data.it_skills}
                onChange={(e) => {
                  setData({ ...data, it_skills: e.target.value });
                }}
                placeholder="IT skills"
                type="text"
              /><br/>
              {/* <span style={{color:"red"}}>{errors.it_skills?.message}</span> */}
            </div>
            <div className="my-3 input_1">
              <label htmlFor="file1">
                <p>Upload last academic certificate</p>
                <img src={file} alt="" width="30" />
              </label>
              <input className="input text-light" id="file1" type="file" onChange={(e) => setFile1(e.target.files[0])}/>
            </div>
            <div className="my-3 input_1">
              <label htmlFor="file2">
                <p>Upload Other certificate orobtained</p>
                <img src={file} alt="" width="30" />
              </label>
              <input
                className="input text-light"
                name="uploadFile"
                id="file2"
                placeholder="Upload file"
                type="file"
                onChange={(e) => setFile2(e.target.files[0])}
              />
            </div>
          </div>
          <button className="mx-3 submit" type="submit">
            Register
          </button>
        </form>
      </section>
      <div className="background3">
        <img src={individuals} alt="" />
      </div>
    </div>
  );
}

export default RegisterIndividuals;

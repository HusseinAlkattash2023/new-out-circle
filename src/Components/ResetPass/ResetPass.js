import React from 'react'
import { useForm } from "react-hook-form";
import password from "../../Assets/images/password.svg"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './ResetPass.css'

const schema = yup.object({
  code: yup.string().required(),
  newpass: yup.string().min(4).required(),
  confirmpass:yup.string().required()
}).required();

const ResetPass = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data)=>{
    console.log(data)
  }
  return (
    <div className='reset'>
        <header>
            <h2>Reset Password</h2>
            <img src={password} alt=""/>
        </header>
        <form onSubmit={handleSubmit(onSubmit)} className="my-2">
          <div className=''>
            <label>Enter Code</label>
            <input {...register("code")} />
            <p>{errors.code?.message}</p>
          </div>
          <div className=''>
            <label>New Password</label>
            <input {...register("newpass")} />
            <p>{errors.newpass?.message}</p>
          </div>
          <div>
            <label>Confirm Password</label>
            <input {...register("confirmpass")} />
            <p>{errors.confirmpass?.message}</p>
          </div>
          <button type='submit' className='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ResetPass

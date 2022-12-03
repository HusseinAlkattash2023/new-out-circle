// ** React Imports
import { useState } from 'react';


// ** Third Party Components
import * as yup from 'yup'
import { useForm} from 'react-hook-form'
// import { ArrowLeft, ArrowRight } from 'react-feather'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Reactstrap Imports


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref(`password`), null], 'Passwords must match'),
  fullName:yup.string().required(),
  mobileNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid')
}).required();


const PersonalInfoAr = ({data , setData , page , setPage}) => {
  const { register , formState:{errors}} = useForm(
    {resolver: yupResolver(schema)}); 

  return (
    <div>
      <div className='my-3 input_'>
        <input 
        name="username"
        {...register("username")} 
        placeholder="اسم المستخدم"
        value={data.username}
        onChange={(e) => {
          setData({ ...data, username: e.target.value });
        }}
        type="text"
        />
        <p style={{color:"red"}}>{errors.username?.message}</p>
      </div>
      <div className='my-3 input_'>
        <input 
        name='password'
        {...register("password")} 
        placeholder="كلمة المرور" 
        type="password"
        value={data.password}
        onChange={(e) => {
          setData({ ...data, password: e.target.value });
        }}
        />
        <p style={{color:"red"}}>{errors.password?.message}</p>
      </div>
      <div className='my-3 input_'>
          <input 
          name="confirmPassword"
          {...register("confirmPasswod")} 
          placeholder="تأكيد كلمة المرور" 
          type="password"
          value={data.confirmPassword}
          onChange={(e) => {
          setData({ ...data, confirmPassword: e.target.value });
        }}
          />
          <p style={{color:"red"}}>{errors.confirmPasswod?.message}</p>
      </div>
    </div>
  )
}

export default PersonalInfoAr;

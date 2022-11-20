import React from 'react'
import { Link } from 'react-router-dom'
import password from '../../Assets/images/password.svg'
import './ForgetPass.css'
import Axios from "axios";

const ForgetPass = ({ResetPassword}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8000/api/users/forget-password?email=husseinalkattash2023@gmail.com")
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div className='forgetpass'>
        <header>
            <h2>forget password</h2>
            <img src={password} alt=""/>
        </header>
        <form>
            <div className='pass'>
            <label>Please Write your email</label>
            {/* <input type="email"/>  */}
            </div>
            <button type='submit' onClick={handleSubmit}>
                Submit
            </button>
        </form>
    </div>
  )
}

export default ForgetPass

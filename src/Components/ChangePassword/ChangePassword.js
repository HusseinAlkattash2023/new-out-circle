import React from 'react'
import pass from '../../Assets/images/password.svg'
import login from '../../Assets/images/Mask Group 2.png'
import './ChangePasswod.css'
const ChangePassword = () => {
  return (
    <div className='changepassword'>
        <div className='form'>
        <div className='header'>
            <h2>Change Password</h2>
            <img src={pass} alt=""/>
        </div>
        <form>
            <div>
                <label>Old Password</label>
                <input type="password"/>
            </div>
            <div>
                <label>New Password</label>
                <input type="password"/>
            </div>
            <div>
                <label>Confirm New Password</label>
                <input type="password"/>
            </div>
            <button type="submit">Submit</button>
        </form>
        </div> 
        <div className='section2'>
            <img src={login} alt=""/>
        </div>
        <div>

        </div>
    </div>
  )
}

export default ChangePassword

import React from 'react'
import pass from '../../Assets/images/password.svg'
import login from '../../Assets/images/ar_photo/login.png'
import './ChangePasswod.css';
import {Link} from 'react-router-dom'
import back from "../../Assets/images/back.png";

const ChangePasswordAr = () => {
  return (
    <div className='changepassword'>
        <header>
        <Link to="/profile-individual-ar" className="back_ar">
            <span>رجوع</span>
            <img src={back} alt="" />
        </Link>
      </header>
        <div className='form_ar'>
        <div className='header'>
            <img src={pass} alt=""/>
            <h2>تغيير كلمة المرور</h2>
        </div>
        <form>
            <div>
                <label>كلمة المرور القديمة</label>
                <input type="password"/>
            </div>
            <div>
                <label>كلمة المرور الجديدة</label>
                <input type="password"/>
            </div>
            <div>
                <label>تأكيد كلمة المرور الجديدة</label>
                <input type="password"/>
            </div>
            <button type="submit">إرسال</button>
        </form>
        </div> 
        <div className='section2-ar'>
            <img src={login} alt=""/>
        </div>
        <div>

        </div>
    </div>
  )
}

export default ChangePasswordAr;
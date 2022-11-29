import React from 'react'
import {Link} from 'react-router-dom'
import back from '../../Assets/images/back.png'
import logout from '../../Assets/images/logout.png'
import notifications from '../../Assets/images/notification.png';
import profile from '../../Assets/images/profile.png';
import image from '../../Assets/images/Component 31 – 28.png'
import './index.css'
function Individuals() {
    const ClearLocalStorate = ()=>{
        localStorage.clear();
    }
    const state = localStorage.getItem("users")
    return (
        <div className='individuals'>
                {
                    !state ? (
                    <header className='header2_ar'>
                    <Link to="/ar">
                        <span>رجوع</span> 
                        <img src={back} alt=""/>
                    </Link>
                    </header>
                    ):(
                        <header className='header1_ar'>
                        <Link to="/profile_individual-ar" className="my-2">
                            <span>الملف الشخصي</span>
                            <img src={profile} alt=""/>
                        </Link>
                        <Link to="/notifications-ar" className="my-2">
                            <span>اﻹشعارات</span>
                            <img src={notifications} alt=""/>
                        </Link>
                        <Link onClick={ClearLocalStorate} to="/ar" className="my-2">
                            <span>تسجيل الخروج</span>
                            <img src={logout} alt=""/>
                        </Link>
                    </header>
                    )
                }
            <div className='individual_ar'>
                <img src={image} alt="" width="260px"/>
            </div>
            <div className='services_ar'>
                <Link to="/career-services-ar" className='career'>
                    <p>خدمات مهنية</p>
                </Link>
                <Link to="/personal-services-ar" className='personal'>
                    <p>خدمات شخصية</p>
                </Link>
            </div>
        </div>
)
}

export default Individuals
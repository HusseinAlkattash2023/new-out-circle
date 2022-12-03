import React from 'react'
import Circle from '../../Components/Circle/Circle_ar'
import './index.css'
import {Link} from 'react-router-dom'
import back from '../../Assets/images/back.png'
import logout from '../../Assets/images/logout.png'
import notifications from '../../Assets/images/notification.png';
import profile from '../../Assets/images/profile.png'
import image from '../../Assets/images/Component 31 – 27.png';
import image2 from '../../Assets/images/hover_ar/Component 31 – 27.png';

function Handicraft_ar() {
  const ClearLocalStorate = ()=>{
    localStorage.clear();
}
    const state = localStorage.getItem("users")
    return (
    <div className='handicraft'>
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
                        <Link to="/profile_handicraft" className="my-2">
                            <span>Profile</span>
                            <img src={profile} alt=""/>
                        </Link>
                        <Link to="/notifications" className="my-2">
                            <span>Notifications</span>
                            <img src={notifications} alt=""/>
                        </Link>
                        <Link onClick={ClearLocalStorate} to="/ar" className="my-2">
                            <span>Logout</span>
                            <img src={logout} alt=""/>
                        </Link>
                    </header>
                    )
                }
        <Circle 
        circle={image}
        circle2={image2}
        demand1="handicraft/service1-ar"
        demand2="handicraft/service2-ar"
        demand3="handicraft/service3-ar"
        demand4="handicraft/service4-ar"
        demand5="handicraft/service5-ar"
        demand6="handicraft/service6-ar"
        demand7="handicraft/service7-ar"
        demand8="handicraft/service8-ar"
        service1="(المصرفية / المالية / التسويقية ..الخ)استشارات وأفكار في العمل الحالي في كافة المجالات"
        service2="نصائح وأفكار تجارية جديدة"
        service3="إدارة الحسابات(المالية والمصرفية / وسائل التواصل الاجتماعي ... إلخ)"
        service4="متابعة الأنشطة الاستثمارية للشركة"
        service5="خدمات (عقارات ، مواصلات ، مالية ، سجل تجاري .. إلخ)"
        service6="أفكار وخدمات إكساء وديكور للشركة"
        service7="تأمين موظفين مؤهلين"
        service8="الخدمات الإعلانية"
        />
    </div>
  )
}

export default Handicraft_ar;
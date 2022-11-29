import React from 'react'
import Circle from '../../Components/Circle/Circle_ar'
import './index.css'
import {Link} from 'react-router-dom'
import back from '../../Assets/images/back.png'
import logout from '../../Assets/images/logout.png'
import notifications from '../../Assets/images/notification.png';
import profile from '../../Assets/images/profile.png'
import image from '../../Assets/images/Component 31 – 25.png'
function Institute_ar() {
return (
    <div className='institute'>
            <Link to="/ar" className="back_ar">
                <img src={back} alt=""/>
                <span>رجوع</span>
            </Link>
        <Circle 
        circle={image}
        demand1="institute/service1-ar"
        demand2="institute/service2-ar"
        demand3="institute/service3-ar"
        demand4="institute/service4-ar"
        demand5="institute/service5-ar"
        demand6="institute/service6-ar"
        demand7="institute/service7-ar"
        demand8="institute/service8-ar"
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

export default Institute_ar
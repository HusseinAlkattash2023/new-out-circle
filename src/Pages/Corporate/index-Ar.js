import React from 'react';
import Circle from '../../Components/Circle/Circle_ar';
import './index.css';
import {Link} from 'react-router-dom';
import back from '../../Assets/images/back.png';
import image from '../../Assets/images/Component 31 – 24.png';
function Croporate_ar() {
  return (
    <div className='croporate'>
            <Link to="/ar" className="back_ar">
                <img src={back} alt=""/>
                <span>رجوع</span>   
            </Link>
        <Circle 
        circle={image}
        demand1="corporate/service1-ar"
        demand2="corporate/service2-ar"
        demand3="corporate/service3-ar"
        demand4="corporate/service4-ar"
        demand5="corporate/service5-ar"
        demand6="corporate/service6-ar"
        demand7="corporate/service7-ar"
        demand8="corporate/service8-ar"
        service="شركة"
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

export default Croporate_ar;